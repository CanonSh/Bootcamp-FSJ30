//Diferencias entre JS y TS
/*
    JS
--Flexible
--Facil de aprender
--Forma de programar a traves de funciones
--(Interpretado) WEB -> Navegador
*/
/*
    TS
-Tipado duro-> YA NO ES TAN FLEXIBLE
-POO -> Forma de programar -> Los pilares estan COMPLETOS
--Un poco mas dificil de aprender
--Compilado (TSC) -> TRADUCIR EL CODIGO DE TS A JS
*/
//Declaracion de variables
var numerito = "Fer jeje saludos"; //JS
//datos primitivos
var numero = 2; //TS
var nombre = "Mario";
var activo = true;
var vacio = null;
//Tipos de datos que vamos a rogar, rezar,intentar,jurar y prometer no usar
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numerito);
console.log(numero);
//Declaracion de funciones
function saludar(nombreParam) {
    return "Holiwis, ".concat(nombreParam);
}
console.log(saludar("Mario"));
//Estructura de datos
//Array
var arraycito = [1, 2, 3];
//arraycito.push("asdf");
//tupla
var arrayEspecifico = [20, "Mario"];
arrayEspecifico.push("hola");
console.log(true);
