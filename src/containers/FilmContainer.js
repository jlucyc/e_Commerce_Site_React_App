import React, {useState, useEffect} from "react";
import FilmList from '../components/FilmList';

const FilmContainer = () => {
  
    const [films, setFilms] = useState ([]);

    useEffect(()=> {
        getFilms();

    }, [])

    const getFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films=>setFilms(films))
    }

    return (
        <div>
            <FilmList films={films}/>
        </div>
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
