import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";



const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Films</Link>
            </li>
            <li>
                <Link to="/basket">Basket</Link>
            </li>
        </ul>
    )
}

export default NavBar;