import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider';
import { Link } from "react-router-dom";
import Formulario from '../components/Formulario/Formulario';
import CartElement from '../components/CartElement/CartElement';

const Cart = () => {

  const {carrito, clear, sacarDelCarrito, totalCarrito, totalArticulos} = useContext(CartContext);
  
  return (
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2 rounded-3">
            <div class="card-body p-0">
                    
              {carrito.length > 0 ? 
                      <>
                        <div class="row g-0">
                          <div class="col-lg-8">
                            <div class="p-5">
                              <div class="d-flex justify-content-between align-items-center mb-5">
                                <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                              </div>
                              <div>
                                {carrito.map((item, index) => (
                                  <CartElement key={index} item={item} quitar={sacarDelCarrito}/>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 bg-grey">
                              <div class="p-5">
                                <Formulario total={totalCarrito(carrito)} totalArt={totalArticulos(carrito)} compra={carrito}/>  
                              </div>
                          </div>
                          <div class="d-flex justify-content-around pt-5">
                            <Link to={'/'} className='mb-0 text-body'><i
                                class="fas fa-long-arrow-alt-left me-2"></i>← Volver al shop</Link>
                            <button onClick={clear}>Vaciar carrito</button>
                          </div>  
                        </div>    
                      </>
                      : 
                        <div>
                          <div>
                            <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                          </div>
                          <div>
                            <p className='text-center'>Carrito Vacio</p>
                          </div>
                          <div>
                            <Link to={'/'} className='mb-0 text-body'><i
                              class="fas fa-long-arrow-alt-left me-2"></i>← Volver al shop</Link>
                          </div>
                        </div>
                      }
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Cart