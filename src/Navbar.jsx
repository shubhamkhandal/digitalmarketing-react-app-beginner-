import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                        <NavLink to="/" className="navbar-brand primary-color" >imDigital</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <NavLink exact to="/" activeClassName="menu_active" className="nav-link" aria-current="page" >Home</NavLink>
                            <NavLink exact to="/service" activeClassName="menu_active" className="nav-link" >Services</NavLink>
                            <NavLink exact to="/about" activeClassName="menu_active" className="nav-link">About</NavLink>
                            <NavLink exact to="/contact" activeClassName="menu_active" className="nav-link">Conatct</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;