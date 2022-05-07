import React, { memo } from "react";
import Todo from "../store/todo";
interface TodoListProps {
  todostore: Todo;
}
const TodoList = memo(({ todostore }: TodoListProps) => {
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

TodoList.displayName = "Todo";

export default TodoList;
