import imageProfile from '../assets/images/profile.png';
import taskIcon from '../assets/icons/tasks.svg';
import { ItemsAside } from './ItemsAside';
import { TodoItems } from './TodoItems';
import taskListItem from '../assets/icons/items-task.svg'
import { TodoSearch } from './TodoSearch';
import { CreateTodo } from './CreateTodo';

import '../css/App.css';
import { TodoCounter } from './TodoCounter';


const defaultTodos = [
  {text: 'Aprender React', completed: false},
  {text: 'Aprender Svelte', completed: true},
  {text: 'Aprender API notion', completed: false},
  {text: 'Aprender Backend', completed: false},
  {text: 'Aprender FrontEnd', completed: true},
]

function App() {
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
            <TodoSearch />
          </header>
          <section className='tasks-list__container'>
            <div className='header__content'>
              <h2>Tasks</h2>
            </div>
            <div className='items__container'>
            <TodoCounter completed={2} total={10}/>
              <ul>
                {defaultTodos.map(todo => (
                  <TodoItems key={todo.text} text={todo.text} icon={taskListItem}/>
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
        </section>
      </section>
    </div>
  );
}

export default App;
