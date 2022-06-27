import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className = {s.contenedor}>
      <input className={s.input} placeholder='Ciudad...'></input> {/* el place holder es lo que aparece dentro del recuadro de busqueda, en transparente */}
      <button className={s.btn} onClick={()=> props.onSearch('cualquier ciudad')}> Agregar </button>
    </div>
  )
};
