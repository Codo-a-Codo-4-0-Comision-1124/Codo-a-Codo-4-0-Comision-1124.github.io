// Comentarios , super importante escribir comentarios
/*
Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores, 
dolore! A rerum vero recusandae velit ullam dolor ? Vel autem aliquid porro suscipit recusandae quasi beatae ullam rem eum excepturi.Provident.
*/

/*************************************** */
/*   Esto es un bloque de algo           */
/************************************** */
var miVariable = 10;
miVariable = 20;

let otraVariable = 21;
otraVariable = 121212;

const PI = 3.14159267;
//PI = 2131; // Esto no lo puedo hacer...

var miVariableString = "Hola Mundo... desde JS";

miVariable = miVariableString;

otraVariable = PI;

let miSuperVariable = Number(100);

otraVariable = miSuperVariable;

var myInput = 0;//prompt("Ingrese su edad..");
// Ojo con los comentarios en una app en produccion..
console.log(miVariableString , miSuperVariable, myInput);

let ultimaVariable = myInput - miSuperVariable;

console.log(ultimaVariable); // console es un objeto que nos permite acceder a la consola

var myPrimitiveString = "Hello world"
var myObjectString = String("Hola mundo");
var mySecondString = new String("Hi World");

let posInit = 2;
let amountChars = 6;

// En Javascript no necesitamos un orden para llamar la funcion antes de definirla
documentWriteH1(myPrimitiveString.toUpperCase(), "strong"); 
documentWriteH1(myPrimitiveString, "h1"); 
documentWriteH1(myPrimitiveString, "h2"); 
documentWriteH1(myObjectString.substr(posInit, amountChars), "span"); 
documentWriteH1(mySecondString.toUpperCase(), "div"); 


/**
 * Esta funcion escribe en el document con 
 * Los parametros que se les pasaron...
 * @param {String} parameters 
 */
 function documentWriteH1(parameters, tag) {
    console.log(tag);
    document.write(`<${tag}>`);// Abro etiqueta
    document.write(parameters);
    document.write(`</${tag}>`); // cierro etiqueta
}
