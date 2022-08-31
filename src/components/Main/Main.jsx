import React from 'react'
import Carousel from './Carousel/Carousel'

const Main = ({greating}) => {
  return (
    <main className='d-flex flex-column align-items-center'>
        <p className='text-black fs-1 mt-4'>{greating}</p>
        <Carousel />
    </main>
  )
}

export default Main