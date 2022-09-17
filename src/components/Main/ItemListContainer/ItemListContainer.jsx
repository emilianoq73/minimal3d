import React, {useContext} from 'react'
import ItemList from './ItemList/ItemList';
import { CartContext } from '../../../context/CartProvider';



const ItemListContainer = () => {
  const {productos} = useContext(CartContext)

    /* const [productos, setProductos] = useState([])

    useEffect(() => {

      const getColData = async () => {
        try {
          const data = collection(db, 'products');
          const col = await getDocs(data);
          const resp = col.docs.map( (doc) => doc={ id:doc.id, ...doc.data()} )
          setProductos(resp)
          console.log(resp)
        } catch (error) {
          console.log(error)
        }
        
      }
      getColData()
      return () => {
        
      }
    }, []) */
    
  return (
        <div className='d-flex flex-column align-items-center'>
            <ItemList items={productos} />  
        </div>
 ) 
}




export default ItemListContainer