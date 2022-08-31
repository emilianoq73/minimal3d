import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import dataProductos from "/EMILIANO/CURSO PROGRAMACION/react/minimal3d/src/components/dataProductos.json";


const ItemDetailContainer = ({numId}) => {
     
    const elegido = dataProductos.products.find(e => e.id === numId);
  
  return (
    <div className='container d-flex justify-content-center'>
      <ItemDetail itemElegido={elegido} />
    </div>
  )
}

export default ItemDetailContainer