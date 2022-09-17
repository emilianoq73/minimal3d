import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider';
import { Link } from "react-router-dom";

const Cart = () => {

  const {quantity, carrito, clear, removeITem} = useContext(CartContext);



  return (
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2 rounded-3">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    </div>
                    
                    {carrito.length > 0 ? 
                              
                              <div >
                              {carrito.map((item, index) => (
                                  <div class="row mb-4 d-flex justify-content-between align-items-center" key={index}>
                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                      <img className='img-fluid rounded-3' src={item.pictureUrl} alt="" />
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                      <h6 class="text-muted">{item.categories}</h6>
                                      <h6 class="text-black mb-0">{item.title}</h6>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      <p className='cantidades'>Cantidad: {quantity}</p>
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 class="mb-0">${item.price * quantity}</h6>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <button onClick={() => removeITem(item.id)}>X</button>
                                    </div>
                                 </div>
                              ))}
                               </div>
                              
                              : <div>
                                <h2>Carrito Vacio</h2>
                              </div>
                              }
                    

                    <div class="d-flex justify-content-around pt-5">
                      <Link to={'/'} className='mb-0 text-body'><i
                            class="fas fa-long-arrow-alt-left me-2"></i>← Volver al shop</Link>
                            <button onClick={clear}>Vaciar carrito</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                    <div class="row mb-2">
                      <div class="col">
                      <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                      <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Telefono" />
                      </div>
                    </div>
                    
                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div>

                    <h5 class="text-uppercase mb-3">envio</h5>

                    <div class="mb-4 pb-2">
                      <select class="select">
                        <option value="1">Standard-Delivery</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>

                    <h5 class="text-uppercase mb-3">Cupón de descuento</h5>

                    <div class="mb-5">
                      <div class="form-outline">
                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea2">Ingrese el código</label>
                      </div>
                    </div>

                    
                    <div class="d-flex justify-content-between mb-5">
                      <h5 class="text-uppercase">Precio total</h5>
                      <h5>$</h5>
                    </div>

                    <button type="button" class="btn btn-dark btn-block btn-lg"
                      data-mdb-ripple-color="dark">Comprar</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Cart