//Paradigma -> modelo de programar
//Que programamos bajo unas reglas en especifico
//Codigo reutilizable
//se basa en el uso de objetos y clases para organizar y estructurar el codigo
//Es un paradigma que esta orientada a clases y objetos

/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de software
    Vamos  a imaginar moldes para poder estandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidad en nuestra app -> Objetos
*/
/*  PILARES DE POO o OPP
--  Herencia
--  Polimorfismo

--  Encapsulamiento -> Limitar el acceso a la informacion
*Modificadores de acceso: Public, Protected, Private, Default=Public
--  Abstraccion->  Nos da herramientas(metodos) para acceder a informacion limitada
*/
class Animal{
    //Atributos o propiedades ->Caracteristicas de esta clase
    public especie:string;
    private edad:number;
    genero:string;
    color:string;

    //constructor
    constructor(especieParam:string,edadParam:number,generoParam:string,colorParam:string){
        this.especie=especieParam;
        this.edad=edadParam;
        this.genero=generoParam;
        this.color=colorParam;
    }
    //Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento
    comer():string{
        return "Estoy comiendo";
    }

    //Getters y Setters
    getEdad():number{
        return this.edad;
    }

    setEdad(edadParam:number){
        this.edad=edadParam;
    }

    //Abstraccion
    aumentarEdad(){
        this.edad+=1;
    }

}


const animalito= new Animal("chucho",18,"Masculino","Blanco");

//Accedemos a un atributo del objeto instanciado(creado en base) de una clase
console.log(animalito.especie);
//console.log(animalito.edad);
console.log(animalito.getEdad());

class Perro extends Animal{
    private raza:string;
    private nombre:string;

    constructor(especieParam:string,edadParam:number,generoParam:string,colorParam:string,razaParam:string,nombreParam:string){

        //Traemos la funcionalidad del padre
        super(especieParam,edadParam,generoParam,colorParam);
        this.raza=razaParam;
        this.nombre=nombreParam;
    }

    ladrar():string{
        return "maje Guau Guau"
    }
    //polimorfismo
    aumentarEdad(): void {
        this.setEdad(this.getEdad()+7);
    }
}

const perrito=new Perro("Chucho",12,"Masculino","negro","Aguacatero","Ozy");

console.log(perrito.getEdad());

type User{
    name:string;
    email:string;
    password:string;
    rol:string;
}

let usuarito2:User={
    name:"Mario",
    email:"mrio@kpo.com",
    password:"contra123455",
    rol:"Admin"
}

interface IUser{
    name:string;
    email:string;
    password:string;
    rol:string;
}

let usuarito3:IUser={
    name:"Mario",
    email:"mrio@kpo.com",
    password:"contra123455",
    rol:"Admin"
}