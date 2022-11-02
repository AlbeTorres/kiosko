import React from 'react';
import img from '../../assets/1.jpg'

const Ubicacion = () => {
  return (
    <div className='px-4 pb-4 md:pt-4 md:w-1/2  max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='m-4 text-2xl font-semibold'>Aquí puedes encontrarnos</h1>
        <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
            <img src={img} className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
            <img src={img} className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
            <img src={img} className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
            <img src={img} className="w-full" />
        </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>
  )
}

export default Ubicacion;