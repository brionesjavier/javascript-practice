
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder:  'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder:  'Absurda cantidad de dinero',
    },
    spider: {
        nombre: 'Spiderman',
        poder:  'La mejor reaccion a alergica a las picadura de las araña'
    },
}

export const buscarHeroe = (id) =>{

    const heroe = heroes[id];

    //Hay varias forma de definir una promesa

    //***********forma 1*************** 
    // const promesa = new Promise();
    
    // return promesa;

    //************forma 2************** */
    //res , rej //resuelve ,rechaza o falla

    return new Promise(( resolve,reject)=>{
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el id ${ id }`);
        }

    });

}