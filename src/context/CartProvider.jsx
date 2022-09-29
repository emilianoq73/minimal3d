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

    
    const [carrito,setCarrito] = useState([]);

    const onAdd = (product) => {
      if (product.stock < 0 || product.cantidad <= 0) return;
      addItem(product);
    }

    const addItem = (product) => {

      if (isInCart(carrito, product)) {
        setCarrito(unificarItems(carrito, product));
      }
       setCarrito([ ...carrito, product]);
        
    };

    function clear() {
    return setCarrito([]);
  }

  const sacarDelCarrito = (id) => {
    let nuevoCarrito = carrito.filter((e) => e.id !== id);
    setCarrito(nuevoCarrito);
  };

  const isInCart = (carrito, product) => {
    return carrito.some((element)=> element.id === product.id)
  }

  const unificarItems = (carrito, product) => {
    // let array = carrito;
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i].id === item.id) {
    //     array[i].cantidad = item.cantidad;
    //     array[i].stock = item.stock;
    //   }
    // }
    //return array;
  
    return carrito.map((a) => {
      if(a.id === product.id){
        a.cantidad = product.cantidad;
        a.stock = product.stock;
      }
      return a;
    } )
  };
  /* const removeITem = (id) => {
    const deleted = carrito.filter((e) => e.id !== id);
    setCarrito(deleted);
    setQuantity(carrito.length -1)
    alert('se quito un producto')
  };  */
    
    
    


  return (
    <CartContext.Provider value={{
        productos,
        carrito,
        onAdd,
        clear,
        sacarDelCarrito
        
        
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider