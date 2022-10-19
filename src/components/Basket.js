import React from "react";
import NavBar from "./NavBar";

const Basket = ({films, onFilmSelected}) => {
    const basketFilms = films.filter(film => film.isInBasket)

    return (
        <>
        <h3>Basket</h3>
        <ul>
            {basketFilms.map(film => {
                return (
                    <li key={film.id}>
                        <button onClick={() => onFilmSelected(film.id)}>{film.title}</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Basket;