import React from "react";
import ListItem from './ListItem'

const FilmList = ({films})  => {
    const filmsItems = films.map(film => {
        return <ListItem film={film} key={film.id}/>
    })

    return (
        <div>
            <h1 className="home-heading">Films</h1>
            <ul>
                {filmsItems}
            </ul>
        </div>
    )
}

export default FilmList;


