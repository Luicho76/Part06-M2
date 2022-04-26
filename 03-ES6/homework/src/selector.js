var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  //1ro para recursividad es determinar el caso base
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }

  for(let i = 0; i < startEl.children.length; i++){
    let elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = resultSet.concat(elementos)
  }

  return resultSet;

  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  /*if(selector[0] === '.') return 'class'; // se escoje . por que las clases inician con punto
  else if(selector[0] === '#') return 'id'; // se escoje el # por que los id inician con le #
  else if(selector.split('.').length === 2) return 'tag.class'; // se hace split, ya que este metodo corte o parte el estring que pase como argumento en las partes que divida la invocacion (lo que este entre los parentesis, en este caso el punto), las tag.class tienen un punto en el medio y devuelve dos elementos en un array, por eso se coloca el .lenght, ya que si al hacer split y quedan dos elementos ([tag, class]), esto en definitiva es una tag.class
  else return 'tag'; // si no hace nada de lo anterior entonces en definitiva es una tag
  
  Ahora lo haremos con ternario:
  pregunta + ? + resultado true + : false u otra pregunta */

  return selector[0] === '.' ? 'class' : selector [0] === '#' ? 'id' : selector.includes('.') ? 'tag.class' : 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); // (#)id, (.)class, tag.class, tag(nombre de la etiqueta)(tagName)
  
  var matchFunction;
  
  if (selectorType === "id") {
    /*matchFunction = function(elementoDelDom){
      if('#' + elementoDelDom.id === selector) return true;
      else return false
    }*/
    matchFunction = (elementoDelDom) => `#${elementoDelDom.id}` === selector
  }
    
  else if (selectorType === "class") {
    /* matchFunction = function(elementoDelDom){
      if('.' + elementoDelDom.classList || '.' + elementoDelDom.className === selector) return true;
      else return false
    } por este modo no me devuelve el false cuando no encuentra la className*/
    /* matchFunction = function(elementoDelDom) {
    let arrayDeClases = elementoDelDom.classlist;
    for(let i = 0; i < arrayDeClases.length; i++){
      if('.' + arrayDeClases[i] === selector) return true
      }
      return false
    } por este modo no me devuelve el false cuando no encuentra la className */ 
    //para a comentar parrafo entero se selecciona y luego control + shift(tecla sobre el control) + A */
    //matchFunction = (elementoDelDom) => `.${elementoDelDom.className}` === selector --> por este modo no me devuelve el false cuando no encuentra la className
    // matchFunction = (elementoDelDom) => elementoDelDom.classList.contains(selector.substring(1))
    matchFunction = (elementoDelDom) => elementoDelDom.classList.contains(selector.slice(1));
    }
  
    
  else if (selectorType === "tag.class") {

    matchFunction = function(elementoDelDom){  // SELECTOR = img.contenedor debe machear al tag y la clase
      
      let tagClass = selector.split('.'); // aca nos separa el tag.class y nos devuelve un array con dos elementos [img, contenedor]
      let tagBuscado = tagClass[0]; //con esto guardamos el nombre del tag ya que este se encuentra en la posicion cero del array del tagClass
      let classBuscado = tagClass[1]; //con esto guardamos la clase del tag ya que este se encuentra en la posicion uno del array del tagClass

      let matchFunctionTag = matchFunctionMaker(tagBuscado);
      let respuestaDelMatchTag = matchFunctionTag(elementoDelDom);

      let matchFunctionClass = matchFunctionMaker('.' + classBuscado);
      let respuestaDelMatchClass =  matchFunctionClass(elementoDelDom);

      return respuestaDelMatchTag && respuestaDelMatchClass 
    }
    
    // matchFunction = (elementoDelDom) => matchFunctionMaker(selector.split('.')[0])(elementoDelDom) && matchFunctionMaker(`.${selector.split('.')[1]}`)(elementoDelDom);

    /* explicacion de `${variable}`
    let nombre = 'Luis'
    'hola mundo' + nombre  
    antes era asi, con ES6 queadria
    `hola mundo ${nombre}` */

  }  
  
  else if (selectorType === "tag") {
  
  matchFunction = (elementoDelDom) => elementoDelDom.tagName.toLowerCase() === selector.toLowerCase()
  
  }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
