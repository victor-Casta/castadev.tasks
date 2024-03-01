import React from "react";
import "../css/CreateTodo.css";
import { TodoContext } from "../TodoContext/context";

function CreateTodo() {
  const { addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  const onCancel = () => {
    setNewTodoValue("");
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form>
      <h2>Crear nueva Tarea</h2>
      <div className="Input__container">
        <input
          id="content-search"
          value={newTodoValue}
          onChange={onChange}
        ></input>
      </div>
      <div className="actions__container">
        <button className="add" type="button" onClick={onSubmit}>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Crear</span>
        </button>
        <button className="remove" type="button" onClick={onCancel}>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Borrar</span>
        </button>
      </div>
    </form>
  );
}

export { CreateTodo };
