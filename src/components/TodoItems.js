import '../css/TodoItems.css';

function TodoItems({icon, text, completed, onComplete, onDelete}) {
  return (
    <li className='Todoitems__container'>
      <div className='Todoitems__content'>
        <img src={icon} alt='Icon item task' />
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