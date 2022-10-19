import React from "react";

const ListItem = ({film}) => {
    return (
        <div>
        <h3>{film.title}</h3> 
        <p>{film.release_date}</p> 
        <p>{film.running_time}</p>  
        <p>{film.director}</p>
        <img src={film.image}></img>
        </div>

    )
}

export default ListItem;

