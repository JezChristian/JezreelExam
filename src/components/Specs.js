import React from 'react'
import "../scss/Specs.scss"
import ProdInfo from "../products.json"

function Specs(index) {
  return (
    <div className='Specs-Main-Con'>

            <div className='Specs-Info'>
            {ProdInfo ? (
                    <>
                        {ProdInfo[index.index].specification.map((spec) => (               
                                <div className='Table-Con'>
                                    <table className='Specs-Table'>
                                        <tr className='Specs-Row'>
                                        <thead className='Specs-Header'>{spec.name}</thead>
                                        <td className='Specs-Data'>{spec.description}</td>
                                        </tr>
                                    </table>
                                </div> 
                        ))}
                    </>) : <div> </div>
                
            }
            </div>

        {/* <div className='Specs-Info'>
            {ProdInfo && ProdInfo.map((product => {
                return(
                    <>
                {product.specification.map((spec) => (               
                        <div className='Table-Con'>
                            <table className='Specs-Table'>
                                <tr className='Specs-Row'>
                                <thead className='Specs-Header'>{spec.name}</thead>
                                <td className='Specs-Data'>{spec.description}</td>
                                </tr>
                            </table>
                        </div> 
                ))}
                </>
                )
            }))}
            </div> */}
    </div>
  )
}

export default Specs