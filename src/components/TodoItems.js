import '../css/TodoItems.css';

function TodoItems({icon, text}) {
  return (
    <li className='Todoitems__container'>
      <div className='Todoitems__content'>
        <img src={icon} alt='Icon item task' />
        <p>{text}</p>
      </div>
      <div className='actions'>
        <span className='add'>-</span>
        <span className='remove'>+</span>
      </div>
    </li>
  );
}

export { TodoItems };