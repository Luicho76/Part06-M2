import React from 'react';


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
    
    <div>
    <button onClick={onClose}> X </button>
    <div>
      <h2> {props.name} </h2>
    </div>
    <div>
      <h3> Min </h3>
      <h3> {agregarGrados(props.min)} </h3>
    </div>
    <div>
      <h3> Max </h3>
      <h3> {agregarGrados(props.max)} </h3>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="logo del clima"/>
    </div>
  </div>

  )
};

/* import React from "react";

export default class Card extends React.Component{
  //constructor(props){
    //super(props)
  //}

  //para el boton:
    agregarGrados(temp){
    return temp + '°'
  } 

    render(){
      return(
        <div>
    <button onClick={this.props.onClose}> X </button>
    <div>
      <h2> {this.props.name} </h2>
    </div>
    <div>
      <h3> Min </h3>
      <h3> {this.agregarGrados (this.props.min)} </h3>
    </div>
    <div>
      <h3> Max </h3>
      <h3> {this.agregarGrados (this.props.max)} </h3>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="logo del clima"/>
    </div>
  </div>
      )
    }
} */