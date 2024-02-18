import '../css/TodoItems.css';
import { TodoIcon } from './TodoIcon';

function TodoItems({icon, text, completed, onComplete, onDelete}) {
  return (
    <li className='Todoitems__container'>
      <div className='Todoitems__content'>
        <TodoIcon color={completed ? '#FF8400': '#727272'} />
        <p className={`${completed && "strikethrough"}`}>{text}</p>
      </div>
      <div className='actions'>
        <span 
        className='remove'
        onClick={onDelete}
        >-</span>
        <span 
        className='add'
        onClick={onComplete}
        >+</span>
      </div>
    </li>
  );
}

export { TodoItems };