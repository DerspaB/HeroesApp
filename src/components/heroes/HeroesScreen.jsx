import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    
    const hero = useMemo(() =>  getHeroesById(heroeId), [heroeId]);


    if (!hero) return <Redirect to="/" /> 

    const handleReturn = () =>{
        history.length <= 2 ? history.push('/') : history.goBack();
    }



    const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__bounceInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__animated animate__bounceInLeft">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearence:</b> {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p> { characters } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >
                    Return
                </button>

            </div>
        </div>
    )
}