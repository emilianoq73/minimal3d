import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'


const dato = { id: 1, title: 'Darth Vader', price: 1200, description: 'Figura personalizada de plástico biodegradable, con detalles pintados a mano.', pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/11/IMG_20211118_180903_611-scaled.jpg?fit=1920%2C2560&ssl=1'}


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        const detail = new Promise((resolve,rejected) => {
          setTimeout(() => {
            resolve(dato);
          },2000);
        });
        
        detail
          .then((resultado) => setProducto(resultado))
          .catch((err) => console.log(err))
          .finally(() => console.log("se finalizo la promesa"));

        return() => {};
     },[]);
  
  
    return (
    <div>
        <ItemDetail item={producto} />
    </div>
  )
}

export default ItemDetailContainer