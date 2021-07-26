import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string'

export const SearchScreen = ( { history, location} ) => {

    const {q = ''} =queryString.parse(location.search);

    
    const [busqueda, setbusqueda] = useState({
        valorBusqueda: q,
    })
    
    const handleInputChange = ({target}) =>{ 
        setbusqueda({
            ...busqueda,
            [target.name]: target.value,
            
        });
    }
    const {valorBusqueda} = busqueda;
    
    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${valorBusqueda}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">


                <div className="col-12" align="center">
                    <h4>Search Form</h4>
                    <hr />

                    <form>
                        <input
                        type="text"
                        autoComplete="off"
                        value={busqueda.valorBusqueda}
                        name="valorBusqueda"
                        onChange={handleInputChange}
                        placeholder="Find your Hero"
                        className="form-control"
                        />

                        <button
                        type="submit"
                        onClick={handleSearch}
                        className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
            
                <div className="col-12 mt-5" align="center">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered.map( heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
