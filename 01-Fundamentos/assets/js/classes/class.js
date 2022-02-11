
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

const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark','Ironman','Yo soy Ironman');

// console.log( spiderman );
// console.log( ironman );

//spiderman.quienSoy();
//ironman.quienSoy();
// ironman.miFrase();

//set y get

spiderman.setComidaFavorita = 'El pie de cereza de la tia Mey';

//spiderman.nemesis = 'Duende verde'
// console.log( spiderman.getComidaFavorita );


//estatico
//Persona._conteo = 2;

console.log('Conteo estatico',Persona._conteo );

console.log(Persona.getConteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna );
console.log( Persona );