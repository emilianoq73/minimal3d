import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
        <nav className='navbar navbar-light bg-light fixed-top my-3'>
            <div className="container-fluid">
                <h1 className="text-dark">Minimal 3D</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <p className='text-dark'>Home</p>
                        </li>
                        <li className="nav-item">
                            <p className='text-dark'>Productos</p>
                        </li>
                        <li className="nav-item">
                            <p className='text-dark'>Contacto</p>
                        </li>
                        <li className="nav-item">
                            <p className='text-dark'>Nosotros</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
