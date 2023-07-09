import React from 'react'
import Mouse from "./assets/WM2-1.png"
import ProdInfo from "./products.json"
import "./scss/Products.scss"
import {Link} from "react-router-dom"

function Products() {

  return (
    <div className='Prod-Main-Con'>
      <div className='Products-Con'>
        <h1>Our Products</h1>
        <div className='Prod-List'>

          {ProdInfo && ProdInfo.map(product => {
            return (
              
              <Link to={`/product/${product.productId}`} key={product.productId} >
              <div className="Prod-Item" >
              <div className='Prod-Img-Con'>
                <img src={product.thumbnails[0]} alt='Product Item #' />
              </div>
              <div className='Prod-Name-Con'>
                <label> {product.name}</label>
              </div>
            </div>
            </Link>
          )})}

          
        </div>
      </div>
    </div>
  )
}

export default Products