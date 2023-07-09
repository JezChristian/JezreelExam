import React, {useState} from 'react'
import "../scss/Carousel.scss"
import ProdInfo from "../products.json"
// import {SlArrowLeft, SlArrowRight} from "react-icons/sl"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel (index) {



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true 
      };
    
    const [current, setCurrent] = useState(0)
    const length = ProdInfo[index.index].thumbnails.length;


  return (
    <div className='carousel-container'>
            {ProdInfo ? (

                    <div className='carousel-images'>
                        <Slider {...settings}>
                        {ProdInfo[index.index].thumbnails.map((thumbnail, index) => (
                                    <img key={index} src={thumbnail}/>))}
                        </Slider>
                        <div className='name-con'>
                     <h1>{ProdInfo[index.index].name}</h1>
                     </div>
                    </div> 
                ) : <div> </div>}
    </div>
  )}




        {/* --------------------------------------Original Code ---------------------------------------*/}
// function Carousel(index) {
//     const [current, setCurrent] = useState(0)
//     const length = ProdInfo[index.index].thumbnails.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)

//     }

//     const prevSlide = () => {
//         setCurrent(current === 0  ? length - 1 : current - 1)
//     }



//   return (
//     <div className='carousel-con'>

//         <div className='img-car-con'>
//             {ProdInfo ? (
//                     <>
//                     <div className='Arrow-Images'>
//                     <div className='Arrow-Con-Left'><SlArrowLeft onClick={prevSlide}/></div>
                    
//                     <div className='carousel-images'>
//                         {ProdInfo[index.index].thumbnails.map((thumbnail, index) => (

//                                 <div className={ index === current ? 'slide active' : 'slide'} key={index}>
//                                 {index === current && (<img key={index} src={thumbnail}/>) } </div>))}
//                     </div>
//                     <div className='Arrow-Con-Right'><SlArrowRight onClick={nextSlide}/></div>
//                     </div>

//                     <div className='name-con'>
//                     <h1>{ProdInfo[index.index].name}</h1>
//                     </div>
                    
//                 </>
                
                
//                 ) : <div> </div>}
                    
//         </div>

//     </div>
//   )




// }

export default Carousel


//   return (
//     <div className='carousel-con'>

//         <div className='img-car-con'>
//             {ProdInfo ? (
//                     <>
//                     <div className='Arrow-Images'>
//                     <div className='Arrow-Con-Left'><SlArrowLeft onClick={prevSlide}/></div>
//                     <div className='carousel-images'>
//                         {ProdInfo[index.index].thumbnails.map((thumbnail, index) => (

//                                 <div className={ index === current ? 'slide active' : 'slide'} key={index}>
//                                     {index === current && (<img key={index} src={thumbnail}/>) } 
//                                 </div>  

//                         ))}
//                     </div>
//                     <div className='Arrow-Con-Right'><SlArrowRight onClick={nextSlide}/></div>
//                     </div>

//                     <div className='name-con'>
//                     <h1>{ProdInfo[index.index].name}</h1>
//                     </div>
                    
//                 </>
                
                
//                 ) : <div> </div>}
                    
//         </div>

//     </div>
//   )