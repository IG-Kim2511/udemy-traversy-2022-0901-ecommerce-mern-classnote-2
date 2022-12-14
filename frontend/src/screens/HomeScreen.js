

// ๐ฆc6. c13

/* 
๐13-10. server.js ์์ fetch apiํ  ๊ณํ
frontend/data_products.js ํ์ผ ์ง์

๐
.then.....์ด๋ ๊ฒ ํด๋๋์ง๋ง, 
๊ฐ์ฌ๊ฐ async syntax๋ฅผ ๋ ์ข์ํจ
*/

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

import axios from 'axios'


// import data_products from '../data_products'


// ๐c6
const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        /* 
        ๐.then.....์ด๋ ๊ฒ ํด๋๋์ง๋ง, 
        ๊ฐ์ฌ๊ฐ async syntax๋ฅผ ๋ ์ข์ํจ

        axios.get('/api/products').then();
         */

        /*
        ๐proxy ๐frontend/package.json

        ๐
        react localhost address๋ฅผ 5000์ผ๋ก ๋ง์ถฐ์ค์ผํจ

        react localhost : 3000
        server localhost : 5000

        ๐Localhost (127.0.0.1)
         "proxy": "http://localhost:5000/",
        "proxy": "http://127.0.0.1:5000/",

        ๋ ๋ค ใใ

        ๐
        ์ฃผ์๋ง์ง๋ง์ '/' ๊ผญ ๋ฃ๊ธฐ
        */

        const fetchProducts = async ()=>{
            const res = await axios.get('/api/products');

        
            setProducts(res.data);
        }

        fetchProducts();
        
    }, [])
    




  return (
    <div>
        <h3 className="components_name"> ๐ฆc6.HomeScreen</h3>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <h3>{product.name}</h3>
                    <Product product={product}/>
                </Col>
            ))}
        
        </Row>

    </div>
  )
}

export default HomeScreen