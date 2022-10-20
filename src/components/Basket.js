<<<<<<< HEAD

=======
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
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
<<<<<<< HEAD
                        <button className="myButton" onClick={() => onFilmSelected(film.id)}>{film.title}</button>
=======
                        <button onClick={() => onFilmSelected(film.id)}>{film.title}</button>
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Basket;