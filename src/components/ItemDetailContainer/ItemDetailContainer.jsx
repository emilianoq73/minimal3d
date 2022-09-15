import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { collection, getDocs } from 'firebase/firestore';
import db from '../../services';


const ItemDetailContainer = ({numId}) => {

  const [products, setProducts] = useState([])

    useEffect(() => {

      const getColData = async () => {
        try {
          const data = collection(db, 'products');
          const col = await getDocs(data);
          const resp = col.docs.map( (doc) => doc={ id:doc.id, ...doc.data()} )
          setProducts(resp)
          console.log(resp)
        } catch (error) {
          console.log(error)
        }
        
      }
      getColData()
      return () => {
        
      }
    }, [])
     
    const elegido = products.find(e => e.id === numId);
  
  return (
    <div className='container d-flex justify-content-center'>
      <ItemDetail productoElegido={elegido} />
    </div>
  )
}

export default ItemDetailContainer