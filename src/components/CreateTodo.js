import React from "react";
import '../css/CreateTodo.css';

function CreateTodo() {
  return (
    <>
      <h2>Crear nueva Tarea</h2>
      <div className="Input__container">
        <input></input>
      </div>
      <div className="actions__container">
        <button className="add" onClick={() => console.log('hola')}>+  Crear</button>
        <button className="cancel">x  Cancelar</button>
      </div>
    </>
  )
}

export { CreateTodo };