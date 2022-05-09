import React, { useEffect } from "react";
import Form from "./components/form";
import { TodoStore } from "./store/todo";
import TodoList from "./components/todo";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./utils/keycloak";

export default function App() {
  const eventLogger = (event: unknown, error: unknown) => {
    console.log("onKeycloakEvent", event, error);
  };

  const tokenLogger = (tokens: unknown) => {
    console.log("onKeycloakTokens", tokens);
  };

  useEffect(() => {
    keycloak
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        console.log(authenticated);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // <ReactKeycloakProvider
    //   authClient={keycloak}
    //   onEvent={eventLogger}
    //   onTokens={tokenLogger}
    // >
    //   <div className="App">
    //     <Form todostore={TodoStore} />
    //     <TodoList todostore={TodoStore} />
    //   </div>
    // </ReactKeycloakProvider>
    <div className="App">
      <Form todostore={TodoStore} />
      <TodoList todostore={TodoStore} />
    </div>
  );
}
