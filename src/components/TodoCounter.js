import '../css/TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    <h2 className='counter__task'>Has completado {completed} de {total} Todos</h2>
  )
}

export { TodoCounter };