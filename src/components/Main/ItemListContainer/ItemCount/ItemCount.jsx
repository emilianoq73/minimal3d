import React, {useState} from 'react'


const ItemCount = ({ stock, initial }) => {

    const [counter, setCounter] = useState(initial);

  return (
    <div className='container'>
        <p className='text-center'>PRODUCTO 1</p>
        <div className="d-flex justify-content-center mb-3" role="group" aria-label="Basic example">
            <button onClick={restar} type="button" className="btn btn-primary"> - </button>
            <span className='mx-5'>{counter}</span>
            <button onClick={sumar} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className='d-flex justify-content-center'>
        <button onClick={OnAdd} type="button" className="btn btn-primary btn-lg">Agregar al carrito</button>
        </div>
    </div>
  )
 
  function OnAdd() {
    stock > 0 ? alert("Felicitaciones tu producto se cargo con exito!!") : alert("No tenemos stock en este momento!!")
  }
  function sumar() {
     counter < stock && setCounter(counter+1)
  }

  function restar() {
    counter > initial && setCounter(counter-1)
  }


}


export default ItemCount