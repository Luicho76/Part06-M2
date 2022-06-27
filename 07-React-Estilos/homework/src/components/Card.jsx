import React from 'react';
import s from './Card.module.css';

export default function Card(props) { 
  // acá va tu código
  
  //para el boton
  
  function onClose(){
    return alert(props.name)
  }

  function agregarGrados(temp){
    return temp + '°'
  } 
  
  return (
    <div classsName={s.container}>
      <div className={s.card}>
          <button className = {s.btn} onClick={onClose}> X </button>
          <h2> {props.name} </h2>
        <div classname = {s.clima}>
          <div className={s.tabla}>
            <h3> Min </h3>
            <h3> {agregarGrados(props.min)} </h3>
          </div>
          <div className={s.tabla}>
            <h3> Max </h3>
            <h3> {agregarGrados(props.max)} </h3>
          </div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="logo del clima"/>
        </div>
      </div>
    </div>
  )
};