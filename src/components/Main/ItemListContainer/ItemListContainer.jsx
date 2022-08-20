import React from 'react'
import ItemCount from './ItemCount/ItemCount'



const ItemListContainer = ({greating}) => {

  return (
        <div className='d-flex flex-column align-items-center'>
            <p className='text-black fs-1 mt-4'>{greating}</p>
            <div className="spinner-border m-5" role="status" style={{width: '3rem', height: '3rem'}} >
                <span className="visually-hidden">Loading...</span>
            </div>
            <ItemCount stock={5} initial={1} />
        </div>
 ) 

}




export default ItemListContainer