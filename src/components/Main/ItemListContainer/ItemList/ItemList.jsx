import React from 'react'
import Item from './Item/Item'

const ItemList = ({items}) => {

  return (

    <div className='row row-cols-1 row-cols-md-3 g-4'>
                
                    {items.length < 1 ? 
                    (<h1>Cargando..</h1>)
                     : 
                      (items.map( items  => 
                      <Item key={items.id} item={items} />))
                    }    
            </div>   
  )
}

export default ItemList