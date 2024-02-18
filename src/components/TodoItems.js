import '../css/TodoItems.css';

function TodoItems({icon, text, completed}) {
  return (
    <li className='Todoitems__container'>
      <div className='Todoitems__content'>
        <img src={icon} alt='Icon item task' />
        <p className={`${completed && "strikethrough"}`}>{text}</p>
      </div>
      <div className='actions'>
        <span className='add'>-</span>
        <span className='remove'>+</span>
      </div>
    </li>
  );
}

export { TodoItems };