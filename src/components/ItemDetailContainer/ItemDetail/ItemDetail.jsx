import React from 'react'
import ItemCount from './ItemCount/ItemCount.jsx';



const ItemDetail = ({itemElegido}) => {

  function OnAdd(counter) {
    alert('Felicitaciones, se cargaron' + counter + 'productos a tu carrito!!')
  }

  return (
    <div className="card w-50 m-3">
        <img src={itemElegido.pictureUrl} className='card-img-top' style={{height:'25rem'}} alt="" />
        <div className="card-body">
            <h5 className="card-title">{itemElegido.title}</h5>
            <p className="card-text">{itemElegido.description}</p>
        </div>
        <ItemCount stock={itemElegido.stock} initial={1} OnAdd={OnAdd}/>
    </div>
  )
}

export default ItemDetail