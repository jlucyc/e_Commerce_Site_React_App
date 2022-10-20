import React, {useState, useEffect} from "react";
import FilmList from '../components/FilmList';
<<<<<<< HEAD
import styled from "styled-components";



// const Title = styled.h2`
// text-align: center;
// font-size: 1em;
// color: #fff;
// background-color: 062c43;
// margin: 0;
// padding: 1em

// `
=======
import Basket from '../components/Basket';
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d


const FilmContainer = () => {
    const [films, setFilms] = useState ([]);
<<<<<<< HEAD
    const [selectedFilmId, setSelectedFilmId] = useState([]);

=======
    const [selectedFilmId, setSelectedFilmId] = useState("");
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d

    useEffect(()=> {
        getFilms();

    }, [])

    const getFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films=>setFilms(films))
    }

    const handleFilmSelected = id => {
        setSelectedFilmId(id)
    }

    const handleBasketToggle = (id) => {
        const updatedFilms = films.map((film) => {
            return film.id === id
            ? {...film, isInBasket: !film.isInBasket}
            : film
        })
        setFilms(updatedFilms)
    }

    const selectedFilm = films.find(film => film.id === selectedFilmId)

    return (
<<<<<<< HEAD
        <h4>
            <FilmList films={films}/>
        </h4>
=======
        <>
        <div>
            <FilmList films={films}/>
        </div>
        </>
>>>>>>> e4935e6a890220eab5239061bcf99904e74d137d
    )
}

export default FilmContainer;

// import React, { useState, useEffect } from 'react';
// import FilmList from '../components/FilmList';
// import FilmDetail from '../components/FilmDetail';
// import FilmSelector from '../components/FilmSelect';
// import FilmForm from '../components/FilmForm';
// import './FilmBox.css'

// const FilmBox = () => {
//     const [films, setFilms] = useState([]);
//     const [selectedFilm, setSelectedFilm] = useState(null);

//     useEffect(() => {
//       getFilms();
//     }, [])

//     const getFilms = function(){
//         fetch('https://ghibliapi.herokuapp.com/films')
//         .then(res => res.json())
//         .then(films => setFilms(films))
//     }

//     // const onMunroClick = function (munro) {
//     //     setSelectedMunro(munro);
//     // }

//     const onFilmSelected = function(film){
//         setSelectedFilm(film);
//     }

//     const addFilm = (newFilm) => {
//         newFilm.id = Date.now(); //this is unique id for not data persistence data
//         const updatedFilms = [...films, newFilm];
//         setFilms(updatedFilms);

//     };

//     return (
//         <div>
//             <FilmSelector className="film-selector" films={films} onFilmSelected={onFilmSelected}/>
//             {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/>:null}
//             <FilmForm onFilmSubmit={addFilm} />
//         </div>
//     )
// }

// export default FilmBox;
