
class Persona{
    //use strict viene por defecto en la clase
    // nombre  = "" ;
    // codigo  = "" ;
    // frase   = "" ;

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){

        //if ( !nombre ) throw Error( 'Necesitamos el nombre ');
        //console.log('!Hola');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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

console.log( spiderman );
console.log( ironman );

//spiderman.quienSoy();
//ironman.quienSoy();
ironman.miFrase();