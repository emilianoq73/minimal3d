import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div class="card m-3">
        <img src={item.pictureUrl} className='card-img-top' style={{height:'25rem'}} alt="" />
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail