import React from "react";

const Basket = ({films, onFilmSelected}) => {
    const basketFilms = films.filter(film => film.isInBasket)

    return (
        <>
        <h3>Basket</h3>
        <ul>
            {basketFilms.map(film => {
                return (
                    <li key={film.id}>
                        <button onClick={() => onFilmSelected(film.id)}>{film.title}</button>
                        {/* <FavouriteCountries countries={countries} onCountrySelected={handleCountrySelected} /> */}
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Basket;
// const FavouriteCountries = ({ countries, onCountrySelected }) => {

//     const favouriteCountries = countries.filter(country => country.isFavourite)
  
//     return (
//       <>
//         <h3>Favourite Countries:</h3>
//         <ul>
//           {favouriteCountries.map(country => {
//             return (
//               <li key={country.cca3}>
//                 <button onClick={() => onCountrySelected(country.cca3)}>{country.name.official}</button>
//               </li>
//             )
//           })}
//         </ul>
//       </>
//     )
//   }