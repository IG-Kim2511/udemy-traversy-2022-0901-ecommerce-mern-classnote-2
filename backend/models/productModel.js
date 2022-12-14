import mongoose from 'mongoose'

// ๐ฆc20

// ๐c20-10. ๋ฐ๋ก ๋ค๋ฅธ ํ์ผ์ ๋ง๋ค์ด๋ ๋๊ณ , ๊ฐ๋จํ๊ฒ์ ๊ฐ์ ํ์ผ๋ด์ ๋ง๋ค์ด๋ ๋จ
const reviewSchema = mongoose.Schema({
    name:{type : String, required : true},
    rating:{type : String, required : true},      //๋๋ฆฝ๋ rating,  ๋ฐ์ rating์ ์ ์ฒด์ ํ๊ท ์ด ๋  ์์ 
    comment:{type : String, required : true}  
},{
    timestamps:true
});


const productSchema = mongoose.Schema({
    
        user: {
            type : mongoose.Schema.Types.ObjectId,   // ๐c20. ์๋์์ฑ๋ _id ๋ถ๋ฌ์ด
            required:true,
            ref: 'User',     //๐c20. 'User'์ด๋ฆ์ผ๋ก referenceํจ (mongoose.Schema.Types.ObjectId์ ์ํธ๋ก ์)

        },
        name:{
            type: String,
            required:true,
        },
        image:{
            type: String,
            required:true,
        },
        brand:{
            type: String,
            required:true,
        },
        category:{
            type: String,
            required:true,
        },
        description:{
            type: String,
            required:true,
        },
        reviews:[reviewSchema],  //๐c20-10. array , ๋ค๋ฅธschema๋ถ๋ฌ์ด
        rating:{
            type: String,
            required:true,
            default: 0,       //๐c20 default๊ฐ
        },
        numReviews:{
            type: String,
            required:true,
            default: 0,
        },
        price:{
            type: Number,
            required:true,
            default: 0,
        },
        countInStock:{
            type: Number,
            required:true,
            default: 0,
        },

    

},{
    timestamps: ture   //๐c20.timestamps : createdAt, updatedAt ์๋์์ฑํด์ค
})




const Product = mongoose.model('Product',productSchema)

export default User