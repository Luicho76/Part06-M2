import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    
    <input placeholder='Ciudad...'></input> {/* el place holder es lo que aparece dentro del recuadro de busqueda, en transparente */}
    <button onClick={()=> props.onSearch('cualquier ciudad')}> Agregar </button>

  </div>
    )
};

