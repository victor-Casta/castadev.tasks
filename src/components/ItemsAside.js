import '../css/ItemsAside.css'

function ItemsAside({icon, title}) {
  return (
    <li className='aside__item'>
      <img src={icon} alt='tasks icon' />
      <h3>{title}</h3>
    </li>
  )
}

export { ItemsAside }