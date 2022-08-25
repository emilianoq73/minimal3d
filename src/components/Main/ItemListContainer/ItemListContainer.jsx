import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './ItemList/ItemList'

const data = [
    { id: 1, title: 'Darth Vader', price: 1200, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/11/IMG_20211118_180903_611-scaled.jpg?fit=1920%2C2560&ssl=1'},
    { id: 2, title: 'Esponjero Bob Esponja', price: 800, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/11/IMG_20211115_163256_132-scaled.jpg?resize=300%2C300&ssl=1'},
    { id: 3, title: 'Lampara velador SpiderMan', price: 3500, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2022/05/IMG_20220505_133648376-scaled.jpg?resize=300%2C300&ssl=1'},
    { id: 4, title: 'Maseta feliz', price: 850, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/09/IMG_20210914_135047_9772-scaled.jpg?resize=300%2C300&ssl=1'},
    { id: 5, title: 'Velador Torre Eiffel', price: 3600, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/11/IMG_20211101_110204_037-scaled.jpg?fit=1920%2C2560&ssl=1'},
    { id: 6, title: 'Dispensero Stitch', price: 1700, pictureUrl: 'https://i0.wp.com/minimal3d.com.ar/wp-content/uploads/2021/12/IMG_20211207_182803_778-scaled.jpg?fit=1920%2C2560&ssl=1'}
]

const ItemListContainer = ({greating}) => {

  function OnAdd(counter) {
    counter > 0 ? alert('Felicitaciones tu pedido se cargo con exito') : alert('Lo sentimos, no tenemos stock!!');
  }

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const task = new Promise((resolve,rejected) => {
          setTimeout(() => {
            resolve(data);
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
            <p className='text-black fs-1 mt-4'>{greating}</p>
            <div className="spinner-border m-5" role="status" style={{width: '3rem', height: '3rem'}} >
                <span className="visually-hidden">Loading...</span>
            </div>
            <ItemCount stock={5} initial={1} OnAdd={OnAdd} />
            <ItemList items={productos} />
        </div>
 ) 

}




export default ItemListContainer