import React, { useMemo, useState } from 'react'
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string'
import { gerHeroesByName } from '../../selectors/getHeroesByName';

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

    const heroesFiltered = useMemo(() => gerHeroesByName(q), [q] )

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
                        (q === '')
                            &&
                            <div className="alert alert-info">
                                There is no a hero
                            </div>
                    }
                    
                    {
                        (q !== '' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is no a hero with <strong>{ q }</strong>
                            </div>
                    }

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