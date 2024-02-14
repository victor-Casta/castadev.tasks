function TodoItems({icon, text}) {
  return (
    <li>
      <img src={icon} alt='Icon item task' />
      <p>{text}</p>
      <span>V</span>
      <span>X</span>
    </li>
  );
}

export { TodoItems };