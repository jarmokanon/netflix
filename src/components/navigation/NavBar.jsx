import React from 'react';
import '../../css/App.css';
import { NavLink } from 'react-router-dom';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchArea from './SearchArea.jsx';



const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">Netflix</a>
                <ul className="links left">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/series">Series</NavLink></li>
                <li><NavLink to="/films">Films</NavLink></li>
                <li><NavLink to="/newandpopular">New and Popular</NavLink></li>
                <li><NavLink to="/mylist">My List</NavLink></li>
                </ul>
                <div className="navright right">
                    <div className="search">
                        <ul>
                            <li>
                                <NavLink to=""></NavLink>
                            </li>
                            <li>
                                <NavLink to=""><FontAwesomeIcon icon={faGift} /></NavLink>
                            </li>
                            <li>
                                <NavLink to=""><FontAwesomeIcon icon={faBell} /></NavLink>
                            </li>
                            <li>
                                <NavLink to=""><FontAwesomeIcon icon={faUser} /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;