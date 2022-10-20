import React from "react";
import styled from "styled-components";

const Image = styled.img`

float: inline-start;
width: 100px;
height: 100px;
object-fit: scale-down;

`
const Data = styled.p`

justify-content: flex-start;

`

const ListItem = ({film, onBasketToggle}) => {

    if (!film) {
        return null
    }

    const handleClick = () => {
        onBasketToggle(film.id)
    }

    const basketBtnText = film.isInBasket ? 'Remove from basket' : 'Add to basket'


<<<<<<< HEAD
=======
const ListItem = ({film, onBasketToggle}) => {

    if (!film) {
        return null
    }

    const handleClick = () => {
        onBasketToggle(film.id)
    }

    const basketBtnText = film.isInBasket ? 'Remove from basket' : 'Add to basket'

>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
    return (
        <div className="cards">
        <h3>{film.title}</h3> 
        <p>{film.release_date}</p> 
        <p>{film.running_time}</p>  
        <p>{film.director}</p>
<<<<<<< HEAD
        <Image src={film.image}></Image>
        <div className="myButton">
        <a onClick={handleClick}>{basketBtnText}</a>
        </div>
=======
        {/* <img src={film.image}></img> */}
        <button onClick={handleClick}>{basketBtnText}</button>
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
        </div>

    )
}

export default ListItem;

