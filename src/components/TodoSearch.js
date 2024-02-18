import '../css/TodoSearch.css';

function TodoSearch() {
  return (
    <input onChange={
      (event) =>
      {
        console.log('Todo Search')
        console.log(event.target.value)
      }
  }
    placeholder="Buscar Tarea" />
  )
}

export { TodoSearch };