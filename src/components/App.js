import imageProfile from '../assets/images/profile.png';
import taskIcon from '../assets/icons/tasks.svg';
import { ItemsAside } from './ItemsAside';
import { ItemsHeader } from './ItemsHeader';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItems } from './TodoItems';
import taskListItem from '../assets/icons/items-task.svg'
import { GraphicStorage } from './GraphicStorage';
import { ItemStorage } from './ItemStorage';
import { Uploads } from './Uploads';

import '../css/App.css';


const defaultTodos = [
  {text: 'Aprender React', completed: false},
  {text: 'Aprender Svelte', completed: true},
  {text: 'Aprender API notion', completed: false},
  {text: 'Aprender Backend', completed: true},
]

function App() {
  return (
    <div className="App">
      <section className='principal-content'>
        <aside >
          <div className="profile-content" >
            <img src={imageProfile} alt='Profile'/>
            <div>
              <h2 >casta</h2>
              <p >WorkSpace</p>
            </div>
          </div>
          <div className='items-list'>
            <ul>
              <ItemsAside icon={taskIcon} title={'Tasks'}/>
            </ul>
          </div>
        </aside>
        <main >
          <header >
            <ItemsHeader icon={taskIcon} title={'Task'}/>
          </header>
          <section className='tasks-list__container'>
            <div className='header__content'>
              <h2>Tasks</h2>
              <CreateTodoButton />
            </div>
            <div className='items__container'>
              <ul>
                <TodoItems icon={taskListItem} text={defaultTodos[0].text}/>
              </ul>
            </div>
          </section>
        </main>
      </section>
      <section className='secondary-content'>
        <section >
          <h2>Storage</h2>
          <div className='graphic-storage'>
            <GraphicStorage />
          </div>
          <div className='items-container'>
            <ul>
              <ItemStorage icon={taskIcon} text={'videos'} countTasks={23}/>
            </ul>
          </div>
        </section>
        <section >
          <h2>Uploads</h2>
          <div className='uploads__container'>
            <Uploads  text={'payte brief'}/>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
