function ItemStorage({icon, text, countTasks}) {
  return (
    <li>
      <div>
        <img src={icon} alt="Items Icon for task Items"/>
        <p>{text}</p>
        <p>{countTasks}</p>
      </div>
    </li>
  )
}

export { ItemStorage }