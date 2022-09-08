import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

const Cart = () => {

  const {quantity, carrito, clear} = useContext(CartContext);
  return (
    <div className='h2 text-center mt-5'>
      {carrito.length > 0 ? 
      <>
      <h2>Carrito de Ecommerce</h2>
      <ul>
       {carrito.map((item, index) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <h3>{quantity}</h3>
            <button>X</button>
          </li>
       ))}
      </ul>
      <button onClick={clear}>Vaciar carrito</button>
      </>
      : <h2>Carrito Vacio</h2>
      }
    </div>
   
  )
}

export default Cart