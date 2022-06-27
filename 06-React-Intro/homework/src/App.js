import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  
  function onClose(){
    return alert(Cairns.name)
  }
  
  
  return ( //cuando voy a retornar HTMl se usan parentesis () y cuando voy a esrbir JavaScript se usan llaves {}
    <div className="App">
      <div>
        <Card
          max={Cairns.main.temp_max} //es una props
          min={Cairns.main.temp_min}// es una props
          name={Cairns.name} // es una props
          img={Cairns.weather[0].icon} // es una props
          onClose={() => alert(Cairns.name)} // es una props     dataflow es la data, la cual baja de un compomnente padre al hijo
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
          onClose = {onClose}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
