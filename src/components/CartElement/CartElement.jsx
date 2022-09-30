import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';


const CartElement = ({item}) => {

    const {sacarDelCarrito} = useContext(CartContext)

  return (
    <div>
        <div class="row mb-4 d-flex justify-content-between align-items-center">
                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                      <img className='img-fluid rounded-3' src={item.pictureUrl} alt="" />
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                      <h6 class="text-muted">{item.categories}</h6>
                                      <h6 class="text-black mb-0">{item.title}</h6>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      <p className='cantidades'>Cantidad: {item.quantity}</p>
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 class="mb-0">${item.price * item.quantity}</h6>
                                    </div>
                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <button onClick={() => sacarDelCarrito(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                      </button>
                                    </div>
                                 </div>
    </div>
  )
}

export default CartElement