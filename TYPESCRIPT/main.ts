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
let numerito="Fer jeje saludos"; //JS
//datos primitivos
let numero:number=2 //TS
let nombre:string="Mario";
let activo:boolean=true;
let vacio:null = null;

//Tipos de datos que vamos a rogar, rezar,intentar,jurar y prometer no usar
let nose:any="PUEDO SER CUALQUIER COSA"
let noDefinido:undefined=undefined;


console.log(numerito);
console.log(numero);

//Declaracion de funciones
function saludar(nombreParam:string):string{
    return `Holiwis, ${nombreParam}`;
}

console.log(saludar("Mario"));


//Estructura de datos
//Array
let arraycito:number[]=[1,2,3];
//arraycito.push("asdf");

//tupla
let arrayEspecifico:[number,string]=[20,"Mario"];

//podemos llegar a tener 2 tipos de datos
// VARIABLE :1TIPO | 2TIPO
let dosTiposDeDatos:null|string=null;

dosTiposDeDatos="";

//Tipo de dato personalizado
type Persona={
    name:string,
    age: number
}
let programador:Persona={name:"Mario",age:20};
let fsj30:Persona[]=[{name:"Mario",age:20},{name:"Jaio",age:25}];
