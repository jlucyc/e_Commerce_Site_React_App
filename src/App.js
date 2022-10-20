import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmContainer from './containers/FilmContainer';
import Basket from "./components/Basket";
import './App.css';



function App() {
  return (
        <>
        <Router>
        <NavBar>
        <Routes>
        <Route path="/" element={<FilmContainer/>}/>
        <Route path="/basket" element={<Basket/>}/>
        </Routes>
        </NavBar>
    </Router> 
    <div className="App">
    <FilmContainer/>
    </div>
    </>
  );
}


export default App;




