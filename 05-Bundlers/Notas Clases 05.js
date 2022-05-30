/*
Modulo
Es un pedazo de codigo que cumple una tarea especifica y que indica sobre que piezas de codigo depende, dependencias.
La idea es separa el codigo para que no sea tan extenso y poder debuglear mas facil
Los modulos siempre tiene un punto de entrada, un index, todos los modulos deben unirse
La cantidad de modulos no afectan en nada
En Reac cada componente es un modulo

en FRONT
Para conectar los modulos, debemos decirle a la funcionablidad que queremos exportarla, la manera mas comun es 
export default funcion  ó simplemente export funcion

en el index origen por asi decirlo, es a donde debemos importar los demas modulos
import limpiar from './limpiarInputs; ejemplo

en BACK
seria para exportar : module.exports = {objeto = funcion} ó funcion directamente
para importar (en el idex origen) :  const funcion = require('./nombre del archivo index)

*/
//FRONT
/* para el archivo modulo (limpiar.js) */ 
export default limpiar;
/* para el archivo contenedor u origen (index.js) */ 
import limpiar from './limpiarInputs';

//BACK
/* para el archivo modulo (borrarAmigo.js) */ 
module.exports = {
    borrarAmigo
};
/* para el archivo contenedor u origen (index.js) */ 
const borrarAmigo = require('./borrarAmigo');


/* 
Patron de Modulo IIFE (inmediatly Invoque Function) investigar

CommonJS
*module.export (es un objeto que puede igualar a una o multiples cosas)
*exports(es un objeto que puedo igualar a una sola una cosa)

*/

/* 
BUNDLERS 

Es un programa que organiza todos los modulos, lo mimifica, se transforma un monton de archivos a uno solo,

el bundlre que vamos a utilizar se llama WEBPACK


*/