import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';
import Contacto from '../pages/Contacto.jsx';
import Nosotros from '../pages/Nosotros.jsx';
import Productos from '../pages/Productos.jsx';
import ItemDetalles from '../pages/ItemDetalles.jsx';
import Footer from '../components/Footer/Footer.jsx';



const Rutas = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/item-detalles/:id' element={<ItemDetalles/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/productos/:categories' element={<Productos/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Rutas