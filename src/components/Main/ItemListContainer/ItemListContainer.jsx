import React, {useEffect, useState} from 'react'
import ItemList from './ItemList/ItemList';
import dataProductos from "/EMILIANO/CURSO PROGRAMACION/react/minimal3d/src/components/dataProductos.json";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const task = new Promise((resolve,rejected) => {
          setTimeout(() => {
            resolve(dataProductos.products);
          },2000);
        });
        
        task
          .then((resultado) => setProductos(resultado))
          .catch((err) => console.log(err))
          .finally(() => console.log("se finalizo la promesa"));

        return() => {};
     },[]);
    
  return (
        <div className='d-flex flex-column align-items-center'>
            <ItemList items={productos} />  
        </div>
 ) 
}




export default ItemListContainer