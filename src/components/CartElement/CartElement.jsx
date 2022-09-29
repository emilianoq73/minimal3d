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
                                      <button onClick={() => sacarDelCarrito(item.id)}>X</button>
                                    </div>
                                 </div>
    </div>
  )
}

export default CartElement