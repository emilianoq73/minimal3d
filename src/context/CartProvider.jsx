import React, { createContext, useState }  from 'react'


export const CartContext = createContext();

const CartProvider = ({children}) => {

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