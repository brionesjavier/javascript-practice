

const regresaTrue = () => {
    console.log( 'Regresa true' );
    return true;
}

const regresaFalse = () => {
    console.log( 'Regresa false' );
    return false;
}

console.warn( 'Not o la Negacion' ); //la negacion es transformar su valor booleano en su opuesto
console.log( true ); // true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() );

console.warn( 'And' ); //true si todos los valores son verdadero
console.log( true && true ); //true
console.log( true && false ); //flase

console.log( '=============' );

console.log( regresaFalse() && regresaTrue() ); //false cuando una es falsa ya no sigue ejecutando la linea de codigo 

console.log( regresaTrue() && regresaFalse() ); //false

console.log( '===== && =====');
regresaFalse() && regresaTrue();
console.log('4 condiciones ', true && true && true && false);

console.warn('OR');// true
console.log( true || false); //true
console.log( false || false );//false

console.log( regresaTrue() || regresaFalse() );

console.log('4 condiciones ', true || true || true || false);