import React from 'react';
import imageProfile from '../assets/images/profile.png';
import taskIcon from '../assets/icons/tasks.svg';
import { ItemsAside } from './ItemsAside';
import { TodoItems } from './TodoItems';
import taskListItem from '../assets/icons/items-task.svg'
import { TodoSearch } from './TodoSearch';
import { CreateTodo } from './CreateTodo';
import '../css/App.css';
import { TodoCounter } from './TodoCounter';
import { TodoCompleted } from './TodoCompleted';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  }

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('castaDev.tasks_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  )
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <div className="App">
      <section className='principal-content'>
        <aside >
          <div className="profile-content" >
            <img src={imageProfile} alt='Profile'/>
            <div>
              <h2>castaDev</h2>
              <p>WorkSpace</p>
            </div>
          </div>
          <div className='items-list'>
            <ul>
              <ItemsAside icon={taskIcon} title={'Tasks'}/>
            </ul>
          </div>
        </aside>
        <main>
          <header>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          </header>
          <section className='tasks-list__container'>
            <div className='header__content'>
              <h2>Tasks</h2>
            </div>
            <div className='items__container'>
            <TodoCounter completed={completedTodos} total={totalTodos}/>
              <ul>
                {searchedTodos.map(todo => (
                  <TodoItems
                  key={todo.text}
                  text={todo.text}
                  icon={taskListItem}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </ul>
            </div>
          </section>
        </main>
      </section>
      <section className='secondary-content'>
        <section className='create-todo__container'>
          <CreateTodo />
        </section>
        <section className='todo-completed'>
          <TodoCompleted />
        </section>
      </section>
    </div>
  );
}

export default App;
