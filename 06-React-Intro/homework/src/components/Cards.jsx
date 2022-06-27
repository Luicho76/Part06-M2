import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  //Cards es un componente que va a tener dentro de el un contenedor y este va a mostrar informacion que llega por props, se recomiendo para saber que son esas props, hacer un console.log
  console.log(props)

  return (
      props.cities.map((ciudad) => 
            <Card
              key={ciudad.id}
              max={ciudad.main.temp_max} 
              min={ciudad.main.temp_min}
              name={ciudad.name} 
              img={ciudad.weather[0].icon} 
              onClose={props.onClose} 
            />
        )
  ) 
};