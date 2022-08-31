import React from 'react'
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import config from "./config.json";

const Navbar = () => {

  return (
    <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to={'/'} className='h3 text-dark'>Minimal 3D</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <NavLink to={'/productos'} className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {config.subroutes.map((ruta,index) => (
                                <NavLink className='text-dark mx-2' key={index} to={ruta.to}>{ruta.label}</NavLink>
                                ))}
                            </ul>
                        </li>   
                        {config.routes.map((ruta,index) => (
                        <NavLink className='text-dark mx-4 mt-2' key={index} to={ruta.to}>{ruta.label}</NavLink>
                        ))}
                    </ul>
                    <form className="d-flex">
                        <CartWidget />
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
