/* 
Siempre va a existir un HTML, es el esqueleto de la pagia web, 

Como se construye una pagina?
1.- Se construre el DOM
2.- Se construye el CSSOM (CSS Object Model), estilos en las etiquetas
3.- Ejecuta el codigo Javascript
4.- Creación del Render Tree
5.- Generación del Layout (Diseño)
6.- Painting (Es donde la parte visible se convierte en pixeles)
7.- Composite (se pintan los pixeles)



DOM API
    El browser nos da una API para interactuar con el DOM usando
JavaScript, esta API nos permite:

*inspeccionar los elementos y la estructura del documento
modicar la estructura: agregar, modicar o eliminar
elementos HTML ó atributos.

*modicar el contenido del documento.

*modicar los estilos (CSS).

*agregar o eliminar eventos.

*reaccionar a determinados eventos

etc...


Metodos de selectores

*getElementsByClassName => devuelve un HTMLCollection
*getElementById => devuelve solo un id
*document.querySelector('.class') => con el punto se seleciona la primera clase
*document.querySelector('#id') => con el # se seleciona el primer ID
*document.querySelector('name') => con el nombre se seleciona el primer tag

*document.querySelectorAll('.class') => devuelve todas las clases
*document.querySelectorAll('#id') => devuelve todos los ID
*document.querySelectorAll('name') => devuelve todos los tag con ese nombre

crear elementos
const parrafo = document.createElement('p');

*para insertar el texto en la const parrafo usamos la propiedad .innerText

*para insertar el parrafo al documento usamos el metodo appendChild

se puede modificar o crear atributos
*.setAttribute (recibe dos atributos, el nombre del atributo y el atributo como tal)


*/

//nodo.addEventListener (string: evento que quiero al que reaccione, funcion callback la logica que quiero que ejecute)