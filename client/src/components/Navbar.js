import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = ({handleButtonClick}) => {
    return (
        <div>
        <ul className="nav-bar">
            <li>
                <NavLink to="/Artwork" className="nav-link" onClick={handleButtonClick}>
                My Artwork
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" className="nav-link">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/Cart" className="nav-link">
                    Cart
                </NavLink>
            </li>
            <li>
                <NavLink to="/logout" className="nav-link">
                    Logout
                </NavLink>
            </li>

        </ul>
        </div>
    );
};

export default Navbar;