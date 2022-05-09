import React, { Suspense, lazy } from "react";

import { TodoStore } from "./store/todo";
import TodoList from "./components/todo";

const Form = lazy(() => import("./components/form"));
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading .....</div>}>
        <Form todostore={TodoStore} />
      </Suspense>
      <TodoList todostore={TodoStore} />
    </div>
  );
}
