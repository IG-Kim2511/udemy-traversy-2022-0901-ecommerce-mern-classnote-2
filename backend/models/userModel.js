import mongoose from 'mongoose'

// ๐ฆc20
/* 
๐
array
๋ค๋ฅธ schema ๋ถ๋ฌ์ด

๐๋ฐ๋ก ๋ค๋ฅธ ํ์ผ์ ๋ง๋ค์ด๋ ๋๊ณ , 
๊ฐ๋จํ๊ฒ์ ๊ฐ์ ํ์ผ๋ด์ ๋ง๋ค์ด๋ ๋จ

๐
๋๋ฆฝ๋ rating
๋ฐ์ rating์ ์ ์ฒด์ ํ๊ท ์ด ๋  ์์ 
*/

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,     //๐c20.required : this property๊ฐ requireํจ. ์์ผ๋ฉด ์๋ฌ
    },
    email:{
        type : String,
        required: true ,
        unique: true ,       //๐c20.unique : 1๋ช์ด 1๊ฐ์ email
    },
    password:{
        type : String,
        required: true  , 
    },
    isAdmin:{
        type : Boolean,
        required: true ,
        default : false,
        /* ๐c20.
        (conditional rendering)
        isAdmin : default : false
        ๋ก๊ทธ์ธ ์ , ๊ธฐ๋ณธ์ false๋ก ํ๊ณ ,
        ๋ก๊ทธ์ธ ํ , true๋ก ๋ฐ๊พธ๊ฒ...
        */
    },

},{
    timestamps: ture   //๐c20.timestamps : createdAt, updatedAt ์๋์์ฑํด์ค
})


// ๐c20. collection์ด๋ฆ ์์ฑ

const User = mongoose.model('User',userSchema)

export default User