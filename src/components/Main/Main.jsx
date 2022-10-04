import React, {useContext} from 'react'
import { CartContext } from '../../context/CartProvider';
import Cards from './Cards/Cards'


const Main = () => {
  const { productos } = useContext(CartContext);
  return (
    <main className='d-flex flex-column align-items-center'>
        <div className='position-relative'>
          <img className='img-fluid' src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MYVGQ5I3TRBVLH2XCMGF5QA5AQ.jpg" alt="" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className='display-1'>Minimal 3D</h1>
            <h2>Tienda de impresiones 3D</h2>
          </div>
        </div>
        <div className='m-4'>
          <h3>Algunos de nuestros productos:</h3>
        </div>
        <Cards items={productos}/>
    </main>
  )
}

export default Main