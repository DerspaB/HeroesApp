import { heroes } from "../data/heroes"


export const gerHeroesByName = ( name = '') => {

    if( name === ''){
        return [];
    }
    name.toLowerCase();
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes(name));

}