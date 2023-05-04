import React,{useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './App.css';

function CarouselComponent({images}) {
 const [currentImage, setCurrentImage] =useState(0)

 const onChange = (index) => {
   setCurrentImage(index);
 }

  return (
    <div className='carousel-container'>
      <Carousel
      className='carousel-box'
      onChange={onChange}
      selectedItem={currentImage}
      showThumbs={true}
      showStatus={true}
      renderArrowPrev={(clickHandler) => (
       <button
          className="carousel-button control-prev control-arrow"
          onClick={clickHandler}/>
      )}
      renderArrowNext={(clickHandler) => (
       <button
         className='carousel-button control-next control-arrow'
         onClick={clickHandler}/>
      )}
      >
       {images.map((img, index) => (
        <div key={index}>
         <img src={img} alt={`carousel-img-${index}`} />
        </div>
       ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent