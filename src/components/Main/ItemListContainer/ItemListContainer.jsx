import React, {useContext} from 'react'
import ItemList from './ItemList/ItemList';
import { CartContext } from '../../../context/CartProvider';



const ItemListContainer = () => {
  const {productos} = useContext(CartContext)

  return (
        <div className='d-flex flex-column align-items-center'>
            <ItemList items={productos} />  
        </div>
 ) 
}




export default ItemListContainer