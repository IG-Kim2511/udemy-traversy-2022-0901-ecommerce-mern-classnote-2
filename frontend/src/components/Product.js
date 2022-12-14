
/* 
    π¦c6.
*/

import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


// π¦c9
import {Link} from 'react-router-dom'

// π¦c6, π¦c7
const Product = ({product}) => {
  return (
    <div>
        <h3 className='components_name'>π¦c6,π¦c7.Product</h3>

        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
            
            {/*π "~~~" π{~~~}λ‘ λ°κΎΈμ΄μ μΈ μ μμ */}
                <Card.Img src={product.image} variant='top'/>   
            </Link>

            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>                
              </Link>
              
              <Card.Text as='div'>
                {/*  <div className='my-3'>
                        β­{product.rating} rating from {product.price}
                      </div> */}

                {/* πc7 */}
                <Rating value={product.rating} text={`${product.numReviews}`}  />
              </Card.Text>
              
              <Card.Text as='h3'>${product.price}</Card.Text>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Product