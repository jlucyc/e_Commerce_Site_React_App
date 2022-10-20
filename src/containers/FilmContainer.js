import React, {useState, useEffect} from "react";
import FilmList from '../components/FilmList';
import Basket from '../components/Basket';


const FilmContainer = () => {
    const [films, setFilms] = useState ([]);
    const [selectedFilmId, setSelectedFilmId] = useState("");

    useEffect(()=> {
        getFilms();

    }, [])

    const getFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films=>setFilms(films))
    }

    const handleAddToBasket = (id) => {
        const updatedFilms = films.map((film) => {
            return film.id === id
        })
        setFilms(updatedFilms)
    }

    return (
            <>
            <div>
            <FilmList films={films}/>
            </div>
            </>
            )   

    }

export default FilmContainer;


