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


const defaultTodos = [
  {text: 'Aprender React', completed: true},
  {text: 'Aprender Svelte', completed: true},
  {text: 'Aprender API notion', completed: false},
  {text: 'Aprender Backend', completed: true},
  {text: 'Aprender FrontEnd', completed: true},
  {text: 'Aprender DevOps', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('search', searchValue);

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
                {defaultTodos.map(todo => (
                  <TodoItems key={todo.text} text={todo.text} icon={taskListItem} completed={todo.completed}/>
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
