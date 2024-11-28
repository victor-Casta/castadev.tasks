import React from 'react';
import { TodoProvider } from '../TodoContext';
// import { TodoCounter } from '../TodoCounter';
// import { AppUI } from './AppUI';

function App() {
  const [state, setState] = React.useState('estado compartido')

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}></TodoItem>
      </TodoList>
    </React.Fragment>
  )
}
function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}
function TodoList({children}) {
  return (
    <section className='todo-container'>
      { children }
    </section>
  )
}
function TodoCounter() {
  return <p>counter</p>
}
function TodoSearch() {
  return <p>search</p>
}
function TodoItem({state}) {
  return <p> item todo {state}</p>
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
