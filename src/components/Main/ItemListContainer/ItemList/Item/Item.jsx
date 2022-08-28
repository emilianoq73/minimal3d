import React from 'react'

const Item = ( {item} ) => {
  return (
    <div className='col'>
      <div className="card" style={{width:'18rem'}}>
        <img src= {item.pictureUrl} className='card-img-top' style={{height:'15rem'}} alt="" />
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Precio: ${item.price}</p>
            <button type="button" className="btn btn-primary">Ver detalles</button>
        </div>
      </div>
    </div>
    
  )
}

export default Item