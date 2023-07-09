import React from 'react'
import Carousel from './Carousel'
import Specs from './Specs';
import { useParams } from 'react-router-dom';
import ProdInfo from '../products.json'

function SpecProduct(key) {

  const { productId } = useParams();
  const product = ProdInfo.find(product => product.productId === productId);
  const prodIndex = ProdInfo.findIndex(product => product.productId === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>

      <Carousel index={prodIndex}/>

      <Specs index={prodIndex}/>

        {/* {ProdInfo && ProdInfo.map(product => {
            return(
                <div>
                    <h1>{product.productId}</h1>
                </div>
            )
        })} */}
    </div>
  )
}

export default SpecProduct