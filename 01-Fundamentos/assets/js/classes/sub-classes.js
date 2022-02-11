class Persona{
    //use strict viene por defecto en la clase
    //inicializando

    //propiedades estaticas
    static _conteo = 0;

    static get getConteo(){
        return Persona._conteo + ' instancias'
    }
    // metodo estatico
    static mensaje(){
        console.log(this.nombre);
        console.log('Este es un método estatico');
    }

    nombre  = '';
    codigo  = '';
    frase   = '';
    comida  = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){

        //if ( !nombre ) throw Error( 'Necesitamos el nombre ');
        //console.log('!Hola');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }



    quienSoy(){
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

class Heroe extends Persona{

    clan = 'Sin clanS';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
    }

    set setClan(clan){
        this.clan=clan;
    } 
    quienSoy(){
        console.log(`soy ${ this.nombre } de ${ this.clan }`);
        super.quienSoy();//llama el metodo de la clase padre
    }
}



const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman');
//const spiderman = new Heroe();

spiderman.setClan ='Los Avengers';
spiderman.setComidaFavorita = 'El pay de la tia Mey';
console.log( spiderman );

spiderman.quienSoy();