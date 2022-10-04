import React from 'react'
import ItemCount from './ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';


const ItemDetail = ({productoElegido}) => {

  return (
    <div className="card w-50 m-3">
        <img src={productoElegido.pictureUrl} className='card-img-top' style={{height:'25rem'}} alt="" />
        <div className="card-body">
            <h5 className="card-title">{productoElegido.title}</h5>
            <p className="card-text">{productoElegido.description}</p>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <p className='mx-1'>Disponible</p>
          <p>{productoElegido.stock}</p>
        </div>
        
        <ItemCount producto={productoElegido} />
        <Link to={"/"} className="m-3" >Volver</Link>
        
    </div>
  )
}

export default ItemDetail