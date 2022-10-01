import React, {useContext} from 'react'
import { CartContext } from '../../context/CartProvider';
import Cards from './Cards/Cards'


const Main = () => {
  const { productos } = useContext(CartContext);
  return (
    <main className='d-flex flex-column align-items-center'>
        <img className='img-fluid' src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MYVGQ5I3TRBVLH2XCMGF5QA5AQ.jpg" alt="" />

        <Cards items={productos}/>
    </main>
  )
}

export default Main