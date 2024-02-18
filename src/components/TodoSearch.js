import React from 'react';
import '../css/TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('search', searchValue);
  return (
    <input
    value={searchValue}
    onChange={
      (event) =>
      {
        setSearchValue(event.target.value)
      }
    }
    placeholder="Buscar Tarea" />
  )
}

export { TodoSearch };