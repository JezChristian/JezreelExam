import React from 'react'
import "../scss/Brochure.scss"
import ProdInfo from "../products.json"

function Brochure(index) {
  return (
    <div>
        {ProdInfo ? (
                <div className='Brochure-Info'>
                        
                <img src={ProdInfo[index.index].brochure}/>

            </div>
            
            ):<div> </div>}
    </div>
    // <div>
    //     {ProdInfo && ProdInfo.map((product =>{
    //         return(
    //             <div className='Brochure-Info'>
                        
    //             <img src={product.brochure}/>

    //         </div>
    //         )
    //     }))}
    // </div>
  )
}

export default Brochure