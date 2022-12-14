
/* 
🦄🦄🦄 Section 3 : express.js (serving & Fetching data from)
🦄🦄🦄 c12. npm init, listen, get, find (Serving Products - Back End Routes)
👉root/package.json
👉backend/server.js
👉backend/data/data_projects.js

🍀root folder
npm init
npm i express

🍀root/package.json
root folder에서 backend folder의 server.js 실행

"start": "node backend/server"



🦄🦄🦄c14. npm Nodemon, Concurrently 
👉package.json

🍀npm i -D nodemon concurrently
root folder에서 설치

🍀
"server": "nodemon backend/server",
"client": "npm start --prefix frontend"

🍉
backend/server에서 nodemon 실행

1st. frontend folder 먼저 들어감
2st. npm start


🍀concurrently
"dev": "concurrently \"npm run server\" \"npm run client\""

Q: 프론트, 백엔드 둘다 동시에 실행시켜야 함
1st. run server       , 2st. run frontend


🦄🦄🦄c15. npm dotenv,(Environment Variables)
👉root/.env


🦄🦄🦄c16. (import syntax) ES Modules In Node.js
👉package.json

🍀package.json
"type": "module",

🍀ES modudle (import ) syntax로 바꾸기

🍀node -v14이상 버전부터 적용됨

🍀frontend의 module syntax와 다른점
data file 가져올때, 확장명 .js를 붙여야만 함


🦄🦄🦄c17. MongoDB Atlas & Compass Setup
👉root/.env


🦄🦄🦄c18 mongoose.js, Connecting Database
👉backend/config/db.js  


🦄🦄🦄c19 npm colors, console에 color넣기 (Optional)
👉backend/config/db.js  



🦄🦄🦄c20 mongoose.js, schema-data만들기 (Modeling Our Data)
👉1 backend/models/userModel.js   -- 순서대로 필기함
👉2 backend/models/productModel.js
👉3 backend/models/orderModel.js


🦄🦄🦄c21 bcryptjs, (Preparing Sample Data)
👉 backend/data/data_products.js
👉 backend/data/users.js
👉1 backend/models/userModel.js 



--------------------🦄🦄🦄거의 포기상태 (걍 캡쳐, 필기만 해둠)🦄🦄🦄----------------------


🦄🦄🦄c22 Data Seeder Script

🍀
명령어에 '-d'가 있으면 destroyData() 실행
명령어에 '-d'가 없으면 importData() 실행



🦄🦄🦄c23 npm express-async-handler, Fetching Products From The Database


🦄🦄🦄c24 Postman, Getting Started With Postman




🦄🦄🦄c27. npm redux, redux-thunk, redux-devtools-extension (Create a Redux Store)



🦄🦄🦄c80. npm multer (Image Upload Config & Endpoint)





*/

/* 
const express = require('express');

// 🍀c15. npm dotenv
const dotenv = require('dotenv')
dotenv.config()

const products = require('./data/data_products'); 
*/



// 🍀c16.Modules
import express from 'express'
const app = express();

// dotenv
import dotenv from 'dotenv'
dotenv.config()

// file
import products from './data/data_products.js'

// 🍀c18. import... 외부 함수 불러오기
// 함수실행은 import 작명한 이름 사용함
import connectDB from './config/db.js'
connectDB();

// 🍀c19.
import colors from 'colors'



/* 🍀c18. moongoose document 코드 여기에 복붙해도 실행됨

🍉web DEv Simplified 코드

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_URI);
*/

app.get('/',(req,res)=>{
    res.send('IG server-get is running');
})

app.get('/api/products',(req,res)=>{

    //🍀12-20. res.json(~)
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{

    //🍀12-30 Params사용법 - req.params.id
    const product = products.find((p) => p._id === req.params.id );
    res.json(product);
})


// 🍀c15. dotenv
// process.env.~~~

// 🍀c19. console에 color : .underline.rainbow.bold

const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`IG server-listen 5000 in ${process.env.NODE_ENV} mode on port ${PORT}`.underline.rainbow.bold) );


// app.listen(5000, console.log('IG server-listen 5000') );