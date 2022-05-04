import React, { memo } from "react";
import Todo from "../store/todo";

interface Props {
  todostore: Todo;
}
const Form = memo(({ todostore }: Props) => {
  return (
    <div>
      <button onClick={() => todostore.addTodo("Idris")}>submit</button>
    </div>
  );
});

Form.displayName = "Form";

export default Form;
