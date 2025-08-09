//Ejemplo de uso de interfaces en POO

//Ejemplo simple -> No es una estructura que usariamos en un proyecto

class Animal{
    private nombre:string;
    private especie:string;

    constructor(nombreParam:string,especieParam:string){
        this.nombre=nombreParam;
        this.especie=especieParam;
    }

    comer():string{
        return "Estoy comiendo"
    }

    getAnimal():Animal{
        return this;
    }
}

let cr7=new Animal("c","chucho");
console.log(cr7.getAnimal());

class Gato extends Animal implements IAnimal{
    raza:string;
    color:string;
    constructor(nombreParam:string,especieParam:string,razaParam:string,colorParam:string){
        super(nombreParam,especieParam);
        this.raza=razaParam;
        this.color=colorParam;
    }

    hacerRuido():string{
        return "miau re miau";
    }
}

class Perro extends Animal implements IAnimal{
    raza:string;
    color:string;
       
    hacerRuido():string{
        return "miau re miau, quiero decir guau re guau";
    }

}

interface IAnimal{
    raza:string;
    color:string;

    hacerRuido():string;
}