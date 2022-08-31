import React from 'react'

const Main = ({greating}) => {
  return (
    <main className='d-flex flex-column align-items-center'>
        <p className='text-black fs-1 mt-4'>{greating}</p>
            <div className="spinner-border m-5" role="status" style={{width: '3rem', height: '3rem'}} >
                <span className="visually-hidden">Loading...</span>
            </div>
        
    </main>
  )
}

export default Main