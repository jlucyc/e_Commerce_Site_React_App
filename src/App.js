import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Basket from './components/Basket';
import NavBar from "./components/NavBar"
import FilmContainer from './containers/FilmContainer';
import './App.css';



function App() {
  return (
    
    <Router>
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<FilmContainer/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>

    <div className="App">
    <FilmContainer/>
    </div>
    </>
    </Router>
  );
}

export default App;




