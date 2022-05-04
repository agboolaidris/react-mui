import { action, makeObservable, observable } from "mobx";

interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
}
export default class Todo {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(name: string) {
    const todo: TodoItem = {
      id: this.todos.length,
      name,
      completed: false,
    };
    this.todos.push(todo);
  }

  updateTodo(id: number) {
    let todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    this.todos = todos;
  }
}

export const TodoStore = new Todo();
