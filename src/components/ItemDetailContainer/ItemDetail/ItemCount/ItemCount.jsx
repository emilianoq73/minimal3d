import React, {useContext} from 'react'
import { CartContext } from '../../../../context/CartProvider';


const ItemCount = ({producto}) => {

  const stock = producto.stock;

  const {
    quantity,
    sumar,
    restar} = useContext(CartContext);

  return (
    <div className='container'>
        <p className='text-center'>PRODUCTO 1</p>
        <div className="d-flex justify-content-center mb-3" role="group" aria-label="Basic example">
            <button onClick={restar} type="button" className="btn btn-primary"> - </button>
            <span className='mx-5'>{quantity}</span>
            <button onClick={() => {sumar(stock)}} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className='d-flex justify-content-center'>
        
        </div>
    </div>
  )
 
  


}


export default ItemCount