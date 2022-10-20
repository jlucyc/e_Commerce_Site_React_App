import React from "react";
import ListItem from './ListItem'

const FilmList = ({films})  => {
    const filmsItems = films.map((film, index) => {
        return <ListItem film={film} key={index}/>
    })

    return (
<<<<<<< HEAD
       <wrapper>
           
=======
        <div>
            <h1 className="home-heading">Films</h1>
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
            <ul>
                {filmsItems}
            </ul>
            </wrapper>
        
    )
}

export default FilmList;

