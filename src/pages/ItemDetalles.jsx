import React from 'react'
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';



const ItemDetalles = () => {

  const params = useParams();
  const numId = params.id;
  return (
    <div>
      <ItemDetailContainer numId={numId} />
    </div>
  )
}

export default ItemDetalles