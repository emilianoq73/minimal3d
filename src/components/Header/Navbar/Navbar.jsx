import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {

    const navBarItems = ["Productos", "Categorias", "Nosotros", "Contacto"]

  return (
    <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h3 className='text-dark'>Minimal 3D</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">   
                        {navBarItems.map((item) => (
                            <li className='text-dark mx-4'>{item}</li>
                        ))}
                    </ul>
                    <form class="d-flex">
                        <CartWidget></CartWidget>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
