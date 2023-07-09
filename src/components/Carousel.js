import React from 'react'
import "../scss/Carousel.scss"
import ProdInfo from "../products.json"


function Carousel(index) {
  return (
    <div className='carousel-con'>

        <div className='img-car-con'>
            {ProdInfo ? (
                    <>
                    <div className='carousel-images'>
                        {ProdInfo[index.index].thumbnails.map((thumbnail, index) => (
                            <img key={index} src={thumbnail}/>
                        ))}
                    </div>

                    <div className='name-con'>
                    <h1>{ProdInfo[index.index].name}</h1>
                    </div>
                </>
                
                
                ) : <div> </div>}
                    
        </div>
{/* 
        <div className='img-car-con'>
            {ProdInfo && ProdInfo.map( product => {
                return(
                    <>
                    <div className='carousel-images'>
                        {product.thumbnails.map((thumbnail, index) => (
                            <img key={index} src={thumbnail}/>
                        ))}
                    </div>

                    <div className='name-con'>
                    <h1>{product.name}</h1>
                    
                    </div>

                    
                </>
                )
                
            })}
                    
        </div> */}

        {/* <div className='inner'>
            {
                ProdInfo && ProdInfo.map(product =>{
                    return(
                        <div className='box'>
                            <img src={product.brochure}/>
                            <br />

                            {product.name}
                        </div>
                    )
                })
            }
        </div> */}

    </div>
  )
}

export default Carousel