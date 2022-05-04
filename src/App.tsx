import Form from "./components/form";
import Todo, { TodoStore } from "./store/todo";
import React from "react";
import { observer } from "mobx-react";

interface TodoListProps {
  todostore: Todo;
}
const TodoList = observer(({ todostore }: TodoListProps) => {
  return (
    <div>
      {todostore.todos.map((todo) => (
        <li key={todo.id}>
          {!todo.completed && (
            <span onClick={() => todostore.updateTodo(todo.id)}>update</span>
          )}
          {todo.name}-{todo.id}
        </li>
      ))}
    </div>
  );
});

export default function App() {
  return (
    <div className="App">
      <Form todostore={TodoStore} />
      <TodoList todostore={TodoStore} />
    </div>
  );
}
