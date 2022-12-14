

// π¦c13


import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';


// import data_products from '../data_products'

const ProductScreen = () => {

  // π¦c10. useParams
  /* 
  πc10-10. 
  useParams μ¬μ©λ°©λ²  (μμμμ ν λ°©μκ³Όλ λ€λ¦)
  const {id} = useParams(); μ¬μ©ν¨  

  πc10-20. useNavigate
  */

  const { id } = useParams();  
  
  // const product = data_products.find((p)=> p._id === id);

  // πc13
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const fetchProduct = async ()=>{
      
        // useParams : `/api/products/${id}`
        const res = await axios.get(`/api/products/${id}`);    
        setProduct(res.data);
    }

    fetchProduct();    
}, [])



  // πc10-20.
  const navigate = useNavigate();

  return (
    <div>
        <h3 className='components_name'>ProductScreen</h3>
 
        <div>πc10-10. </div>
        <div>{product.name}</div>
        

        <div>
          <p>  πc10-20. </p>
          <button onClick={()=>{navigate(-1) }}>  navigate(-1) </button>
          <button onClick={()=>{navigate(-2) }}>  navigate(-2) </button>
          <button onClick={()=>{navigate('/product/2') }}>  navigate('/product/2') </button>
          <button onClick={()=>{navigate('/') }}>  navigate('/') </button>
        </div>
        
        <Row>
          <Col md={6}>
          <Image src={product.image} fluid ></Image>
            <img src={product.image} alt=""></img>
          </Col>

          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>

              <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews}`}></Rating>
              </ListGroupItem>

              <ListGroupItem>
                Price : ${product.price}
              </ListGroupItem>

              <ListGroupItem>
                Description : ${product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col>Price : </Col>
                    <Col>
                      ${product.price}
                    </Col>                  
                  </Row>
                </ListGroupItem>   
                
                <ListGroupItem>
                  <Row>
                    <Col>Status : </Col>
                    <Col>
                     <p>πc10-30. conditional rendering</p>
                    </Col>
                    <Col>
                      {
                        product.countInStock > 0 
                        ? 'In Stock'
                        : 'Out of Stock'
                      }
                    </Col>                  
                  </Row>
                </ListGroupItem>                  

                            
                <ListGroupItem>
                  <button disabled>Add to Cart</button>

                  <p>πc10-40. conditional rendering : inStockμ΄ 0μ΄λ©΄, λ²νΌ ν΄λ¦­μλκ² ν¨ </p>
                  <button disabled={product.countInStock ===0 }>πdisabled={product.countInStock ===0 }</button>                  
                </ListGroupItem>   

              </ListGroup>
            </Card>
          </Col>

        </Row>


    </div>
  )
}

export default ProductScreen