import React from 'react'

const Carousel = () => {

  return (
    
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className='d-block w-100' src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/3D.jpg" alt="" />
                </div>
                <div className="carousel-item">
                <img className='d-block w-100' src="https://www.itreseller.es/files/201902/impresora-3d-industria.jpg" alt="" />
                </div>
                <div className="carousel-item">
                <img className='d-block w-100' src="https://hardzone.es/app/uploads-hardzone.es/2021/09/Errores-impresora-3D.jpg?x=480&y=375&quality=40" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
  )
}

export default Carousel