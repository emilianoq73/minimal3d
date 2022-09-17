import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider';
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = ({numId}) => {

  const {productos} = useContext(CartContext)

  
    const elegido = productos.find(e => e.id === numId);
  
  return (
    <div className='container d-flex justify-content-center'>
      <ItemDetail productoElegido={elegido} />
    </div>
  )
}

export default ItemDetailContainer