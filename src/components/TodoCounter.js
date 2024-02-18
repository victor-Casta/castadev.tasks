import '../css/TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    <h2 className="counter__task">
      {completed === total
        ? '¡Felicidades! Has completado todas las tareas pendientes 🚀'
        : `Has completado ${completed} de ${total} tareas`}
    </h2>
  );
}


export { TodoCounter };