// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

    var arra = []
  for (var i = 0; i < arra.length; i++){
      if(arra[i] === 4){
      return arra [0];
    }
  }
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  const arra=["ironman", "hulk", "thor", "loky"];
  return arra[arra.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  const marvel = ["ironman", "hulk", "thor", "loky"];
  return marvel.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const arra = [1, 2, 3, 4]
  for (var i = 0; i < arra.length; i++){
    return arra[i];
  }
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  const marvel =["ironman", "hulk", "thor", "loky"];
  marvel.push("Cap");
  return marvel;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  const marvel =["ironman", "hulk", "thor", "loky"];
  marvel.unshift("steven");
  return marvel;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  const saludos = ["Hola", "mundo", "como", "estan", "todos"];
  const saludosString = saludos.join(", ");
  return saludosString;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  const marvel =["ironman", "hulk", "thor", "loky"];
  if (marvel [0] === "iroman"){
    return true
  }else{
    return false
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var arrayEnteros = [];
  var numero = suma;
  for (var i =0; i < arrayEnteros -1; i++){
    if (arrayEnteros > 10){
      suma = arrayEnteros[i] + 1;
      return numero [i];
    }
  }
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  const resulTests = [12, 12, 12];
  for (const resultadosTest of resulTests){
      return resultadosTest;
    }
    let promedio = 0;
    for (let i = 0; i < resulT.length; i++){
    if (suma = resulT([0] +[1] +[2]+ [3])){
      promedio = suma / 4;
    }
    return [promedio];
  }

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
   const numer = [15, 64, 25, 34, 48];
     var max = 0;
     for (var i = 0; i < numer.length; i++){
        if (max < numer(i));
        max = numer(i);
   }
      return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulaor = 1;
if (arguments.length === 0){
  return 0;
} else if (arguments.length === 1){
  return arguments[0];
}else{
  for (var i = 0; i < arguments.length; i++){
    acumulaor = acumulaor * arguments[i];
  }
}
  return acumulaor;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var arrayContiene = (0);
  for (var i = 0; i < arreg.length -1; i++){
    if (arreg[i] > 18){
      arrayContiene = arreg(i);
    }
  }
  return arrayContiene;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   


  if (numDeDia === 1 || numDeDia === 7){
    return "Es fin de semana";
  } else if (numDeDia > 1 && numDeDia < 7){
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var o = o.toString();
  if(o[0] === "9"){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí


  for(var i = 0; i < arreg.length - 1; i++){
    if (arreg[i] !== arreg[i + 1]){
      return false;
    }
  }
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for (var i = 0; i < arra.length; i++){
    if(arra[i] === "Enero" || arra[i] === "Marzo" || arra[i] === "Noviembre"){
      meses.push(arra[i]);
      return meses;
    }
  }
  if (meses.length === 3){
    return meses;
  } else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var masde100 = [];
    for( var i = 0; i > arra.length -1; i++){
    if(arra[i] > 100 && arra[i] <= 200){
      masde100.push(arra[i]);
    }
  }
  return masde100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arraynuevo = [];
  var suma = numeros;
  for(var i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i){
       break;
    } else{
      arraynuevo.push(suma);
    }
  }
  if (arraynuevo.length < 10){
    return "Se interrumpio la ejecución";
  }else if (arraynuevo.length === 10){
    return numeros;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
  var nuevoarray = [];
  var suma = num;
  for(var i = 0; i < 11; i+2){
      if (i === 5){ 
        continue;
    } else{
      suma = suma +2;
      nuevoarray.push(suma);
    }
  }
  return nuevoarray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
