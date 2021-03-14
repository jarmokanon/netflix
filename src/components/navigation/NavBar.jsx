import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">Netflix</a>
                <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/series">Series</NavLink></li>
                <li><NavLink to="/films">Films</NavLink></li>
                <li><NavLink to="/newandpopular">New and Popular</NavLink></li>
                <li><NavLink to="/mylist">My List</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;