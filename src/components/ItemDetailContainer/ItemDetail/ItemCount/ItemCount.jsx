import React, {useState} from 'react'
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, OnAdd }) => {
  
    const [counter, setCounter] = useState(initial);

  function sumar() {
     counter < stock && setCounter(counter+1)
  }

  function restar() {
    counter > initial && setCounter(counter-1)
  }  

  return (
    <div className='container'>
        <p className='text-center'>PRODUCTO 1</p>
        <div className="d-flex justify-content-center mb-3" role="group" aria-label="Basic example">
            <button onClick={restar} type="button" className="btn btn-primary"> - </button>
            <span className='mx-5'>{counter}</span>
            <button onClick={sumar} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className='d-flex justify-content-center'>
        <Link to={'/cart'} onClick={() => {OnAdd(counter)}} type="button" className="btn btn-primary btn-lg">Agregar al carrito</Link>
        </div>
    </div>
  )
 
  


}


export default ItemCount