
/* 
๐ฆc21 
๐๐1 backend/models/userModel.js 
userModel...mongoose schema์ ์ด๋ฏธ ์๋ object key๋ง ๊ฐ์ ธ์ด
*/

/* 
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt); */



import bcrypt from 'bcryptjs'

const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10),             //๐๋ค๋ฅธ๊ณณ์์ ๋น๋ฒ ๊ฐ์ ธ์์ ๋ฃ์ ์์ 
        isAdmin: true,
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10), 
        // isAdmin: true,               //๐์ญ์ , default value ๊ฐ false ์ด๋ฏ๋ก..
    },
    {
        name:'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync("123456", 10),        
        // isAdmin: true,              //๐์ญ์ , default value ๊ฐ false ์ด๋ฏ๋ก..
    },
]

export default users