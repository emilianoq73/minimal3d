import React, { createContext, useState, useEffect }  from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../services';


export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [productos, setProductos] = useState([])

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
  }, [])

    let initial = 0;

    const [quantity, setQuantity] = useState(initial);
    const [carrito,setCarrito] = useState([]);

    const sumar = (stock) => quantity < stock && setQuantity(quantity+1);

    const restar = () => quantity > initial && setQuantity(quantity-1);

    const onAdd = (productoElegido, quantity) => {

      addItem(productoElegido, quantity)
    }

    const addItem = (productoElegido, quantity, id) => {

      if (isInCart(productoElegido.id)) {
        let aux = productoElegido;
        console.log(aux)
      } else{
         setCarrito([ ...carrito, {...productoElegido, quantity, id}]);
      }
       
        
    };

    function clear() {
    return setCarrito([]);
  }

  function isInCart(itemId) {
    return carrito.some((element)=> element.id === itemId)
  }

  const removeITem = (id) => {
    const deleted = carrito.filter((e) => e.id !== id);
    setCarrito(deleted);
    setQuantity(carrito.length -1)
    alert('se quito un producto')
  }; 
    
    
    


  return (
    <CartContext.Provider value={{
        productos,
        initial,
        quantity,
        carrito,
        sumar,
        restar,
        onAdd,
        clear,
        removeITem
        
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider