import React from "react";
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">My-App</NavLink>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false"
               aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <NavLink className="btn btn-outline-light"   to="/users/add"><i className='fa fa-user-plus'></i></NavLink>
        </div>
    </nav>
    )
}

export default Navbar;