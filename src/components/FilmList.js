import React from "react";
import ListItem from './ListItem'

const FilmList = ({films})  => {
    const filmsItems = films.map((film, index) => {
        return <ListItem film={film} key={index}/>
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

