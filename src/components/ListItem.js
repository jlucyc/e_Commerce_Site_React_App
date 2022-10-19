import React from "react";

const ListItem = ({film, onBasketToggle}) => {

    if (!film) {
        return null
    }

    const handleClick = () => {
        onBasketToggle(film.id)
    }

    const basketBtnText = film.isInBasket ? 'Remove from basket' : 'Add to basket'

    return (
        <div>
        <h3>{film.title}</h3> 
        <p>{film.release_date}</p> 
        <p>{film.running_time}</p>  
        <p>{film.director}</p>
        {/* <img src={film.image}></img> */}
        <button onClick={handleClick}>{basketBtnText}</button>
        </div>

    )
}

export default ListItem;

