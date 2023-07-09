import React from 'react'
import ProdInfo from '../products.json'

function SpecProduct(productId) {
  return (
    <div>
        {ProdInfo && ProdInfo.map(product => {
            return(
                <div>
                    <h1>{product.productId}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default SpecProduct