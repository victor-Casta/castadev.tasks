function ItemsHeader({icon, title}) {
  return (
    <a href='https://es.react.dev/'>
      <div>
        <img src={icon} alt='Icon for Header Item'/>
        <h3>{title}</h3>
      </div>
    </a>
  )
}

export { ItemsHeader }