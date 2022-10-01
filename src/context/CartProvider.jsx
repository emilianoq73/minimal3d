import React, { createContext, useState, useEffect }  from 'react';
import useFirebase from '../hooks/useFirebase';



export const CartContext = createContext();

const CartProvider = ({children}) => {

  const { productos, getColData } = useFirebase();

  useEffect(() => {
    getColData();
    // eslint-disable-next-line
  },[]);

    
    const [carrito,setCarrito] = useState([]);

    const onAdd = (product) => {
      if (product.stock < 0 || product.cantidad <= 0) return;
      addItem(product);
    }

    const addItem = (item) => {
      isInCart(carrito, item) ?
      setCarrito(unificarItems(carrito, item)) :
      setCarrito([ ...carrito, item]);
    };

const isInCart = (carrito, item) => {
    return carrito.some((element)=> element.id === item.id)
  }

  const unificarItems = (carrito, item) => {
    return carrito.map((a) => {
      let b = a.quantity;
      if(a.id === item.id){
        a.quantity = b + item.quantity;
      }
      return a;
    } )
  };    

  const clear=()=> {
    return setCarrito([]);
  }

  const sacarDelCarrito = (id) => {
    let nuevoCarrito = carrito.filter((e) => e.id !== id);
    setCarrito(nuevoCarrito);
  };

  

  const totalCarrito = (carrito) => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].quantity * carrito[i].price;
    }
    return suma;
  };
  
  const totalArticulos = (carrito) => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].quantity;
    }
    return suma;
  };
  const validarCompleto = (campos) => {
    return campos.some((campo) => campo === "")
  }

  return (
    <CartContext.Provider value={{
        productos,
        carrito,
        onAdd,
        clear,
        sacarDelCarrito,
        totalCarrito,
        totalArticulos,
        validarCompleto
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider