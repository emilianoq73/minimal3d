import React from 'react'
import Item from './Item/Item.jsx';
import { useParams } from "react-router-dom";

const ItemList = ({items}) => {

  const params = useParams()
  const par = params.categories
  console.log(par)

  return (

    <div className='row row-cols-1 row-cols-md-3 g-4'>
                
      {items.length < 1 ? 
      (<h1>Cargando..</h1>
      ) : ( 
        items.filter((elem) => elem.categories === par).map( items  => 
        <Item key={items.id} item={items} />))
      }  
                    
    </div>   
  )
}

export default ItemList