import React, {useContext, useState} from 'react'
import { CartContext } from '../../../../context/CartProvider';

const ItemCount = ({producto}) => {

  const stock = producto.stock;
  const [quantity, setQuantity] = useState(1);

  let product = producto && { ...producto, quantity}

  const sumar = () => stock -1 > quantity && setQuantity(quantity+1);

  const restar = () => quantity > 1 && setQuantity(quantity-1);

  const {
    onAdd} = useContext(CartContext);

  return (
    <div className='container'>
        
        <div className="d-flex justify-content-center mb-3" role="group" aria-label="Basic example">
            <button onClick={restar} type="button" className="btn btn-primary"> - </button>
            <span className='mx-5'>{quantity}</span>
            <button onClick={sumar} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className='d-flex justify-content-center'>
          <button onClick={() => onAdd(product)} type="button" className="btn btn-primary btn-lg">Agregar al carrito</button>
        </div>
    </div>
  )
 
  


}


export default ItemCount