import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import './src/global.gcss';

render(
    <div> 

    <Producto title="Prueba" price={400}/>, 
    
    </div>
    
    document.getElementById('app'));
