import React, { useContext } from 'react'
import ItemCount from './ItemCount/ItemCount.jsx';
import { Link } from "react-router-dom";
import { CartContext } from '../../../context/CartProvider.jsx';



const ItemDetail = ({productoElegido}) => {

  const {addItem} = useContext(CartContext)

  return (
    <div className="card w-50 m-3">
        <img src={productoElegido.pictureUrl} className='card-img-top' style={{height:'25rem'}} alt="" />
        <div className="card-body">
            <h5 className="card-title">{productoElegido.title}</h5>
            <p className="card-text">{productoElegido.description}</p>
        </div>
        <ItemCount producto={productoElegido} />
        <Link to={'/cart'} onClick={() => {addItem(productoElegido)}} type="button" className="btn btn-primary btn-lg">Agregar al carrito</Link>
    </div>
  )
}

export default ItemDetail