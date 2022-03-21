
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder:  'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion a alergica a las picadura de las araña'
    },
}

export const buscarHeroe = (id,callback)=>{

    const heroe = heroes[id];

    callback( heroe );

}

