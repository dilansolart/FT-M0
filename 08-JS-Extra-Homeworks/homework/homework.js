// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  let length0fObject = 0;
  for(let key in objeto){
      length0fObject++;
  }
  var array = [];
  for (var i = 0; i < length0fObject; i++) {
    var arrayA = [];
    var clave = Object.keys(objeto)[i];
    arrayA.push(clave);
    arrayA.push(objeto[clave]);
    array.push(arrayA)
  } 
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var myObj = new Object();
  var arrayNombre = string.split('').sort();
  nombreM = arrayNombre.map(function(elemento, indice){
  var contL = 0;
  for (var i = 0; i < arrayNombre.length; i++) {
    if (elemento === arrayNombre[i]) contL += 1;
    }
    myObj[arrayNombre[indice]] = contL;
  });
  return myObj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var M = [], m = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) M.push(s[i]);
      else m.push(s[i]);
  }
  return (M.join('') + m.join(''));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = str.split('').reverse().join('').split(' ');
  var palabrasA = [];
  console.log(palabras.length)
  for (var i = palabras.length - 1; i >= 0; i--) {
      palabrasA.push(palabras[i]);
  }
  return palabrasA.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString();
  var numeroInv = numero.split('').reverse().join('');
  if (numeroInv === numero) return 'Es capicua';
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  var newLetras = cadena.replace('a', '').replace('b', '').replace('c', '');
  return newLetras;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(elementoA, elementoB) {
    return elementoA.length - elementoB.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  var array = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        array.push(arreglo1[i]);
      }
    }
  }
  return array;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

