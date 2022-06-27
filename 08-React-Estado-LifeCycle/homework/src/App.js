import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  
  function onClose (id) { 
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  const [cities, setCities] = useState([]);

  const apiKey = '1b57f1bfb1f35b5d4310aea420599337'

    function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`) //le pido al servidor info de la ciudad
      .then(r => r.json()) //r es la respuesta del servidor
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose = {onClose}/>
    </div>
  );
}
