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
        <button className="add">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Crear</span>
        </button>
        <button className="remove">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Borrar</span>
        </button>
      </div>
    </form>
  )
}

export { CreateTodo };