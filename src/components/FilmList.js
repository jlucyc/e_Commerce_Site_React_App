import React from "react";
import ListItem from './ListItem';

const FilmList = ({films})  => {
    const filmsItems = films.map((film, index) => {
        return <ListItem film={film} key={index}/>
    })

    return (
       <wrapper>
           
            <ul>
                {filmsItems}
            </ul>
            </wrapper>
        
    )
}

export default FilmList;

