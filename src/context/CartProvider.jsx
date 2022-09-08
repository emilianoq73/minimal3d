import React, { createContext, useState }  from 'react'


export const CartContext = createContext();

const CartProvider = ({children}) => {

    let initial = 1;

    const [quantity, setQuantity] = useState(initial);

    const sumar = (stock) => quantity < stock && setQuantity(quantity+1);

    const restar = () => quantity > initial && setQuantity(quantity-1);

    const [carrito,setCarrito] = useState([]);

    const addItem = (productoElegido, quantity) => {
        
        setCarrito([ ...carrito,{...productoElegido, quantity}])
    };

    const clear = () => setCarrito([]);

    /* const removeITem = (item.id) => {
      const deleted = carrito.filter((carrito) => carrito.id !== item.id);
      setProducts(deleted);
      setTotal(carrito.length - 1);
     
      
       alert("Se quitó un producto")
    }; */
    
    


  return (
    <CartContext.Provider value={{
        initial,
        quantity,
        carrito,
        sumar,
        restar,
        addItem,
        clear,
        
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider