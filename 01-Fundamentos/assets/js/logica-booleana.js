

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


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo';//
const a2 = 'Hola ' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;

console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && ( true || true || true ) ){
    console.log('Hacer algo');
}else {
    console.log( 'Hacer otra cosa' );
}
