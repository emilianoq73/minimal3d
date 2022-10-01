import React from 'react'
import Item from '../ItemListContainer/ItemList/Item/Item'


const Cards = ({items}) => {

  return (
    <div className='container mt-4'>
            <div className='d-flex flex-column align-items-center'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                {items.map( items  =>
                <Item key={items.id} item={items} />
                 )}
                </div>
            </div>
    </div>
    
  )
}

export default Cards