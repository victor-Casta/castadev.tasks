import React from "react";
import '../css/CreateTodo.css';

function CreateTodo() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <h2>Crear nueva Tarea</h2>
      <div className="Input__container">
        <input></input>
      </div>
      <div className="actions__container">
        <button
        className="add"
        onClick={
          (event) => {
            console.log(event);
          }
        }
        >+  Crear</button>
        <button className="cancel">x  Borrar</button>
      </div>
    </form>
  )
}

export { CreateTodo };