import React from "react";
import { observer } from "mobx-react";
import Todo from "../store/todo";
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

export default TodoList;
