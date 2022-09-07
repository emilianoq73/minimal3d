import React, { createContext, useState }  from 'react'


export const CartContext = createContext();

const CartProvider = ({children}) => {

    let initial = 1;

    const [quantity, setQuantity] = useState(initial);

    const sumar = (stock) => quantity < stock && setQuantity(quantity+1);

    const restar = () => quantity > initial && setQuantity(quantity-1);

    const [carrito,setCarrito] = useState([]);

    const addItem = (productoElegido) => {
        
        setCarrito([ ...carrito,productoElegido])
    };

    const clear = () => setCarrito([]);


  return (
    <CartContext.Provider value={{
        initial,
        quantity,
        carrito,
        sumar,
        restar,
        addItem,
        clear
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider