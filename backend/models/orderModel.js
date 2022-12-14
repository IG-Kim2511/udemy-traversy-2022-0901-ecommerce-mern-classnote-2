import mongoose from "mongoose";

// ๐ฆc20

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [             //๐c20. array๋ก ๋ง๋ฌ
      {
        name: { type: String, required: true },
        qty: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",               //ref
        },
      },
    ],
    shippingAddress:{                               //๐c20. object ์์ object group
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod:{
        type : String,
        required: true       
    },
    paymentResult:{                              
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String},
    },
    taxPrice:{                              
       type: Number, 
       required: true,
       default: 0.0
    },
    totalPrice:{                              
       type: Number, 
       required: true,
       default: 0.0
    },
    isPaid:{                              
       type: Boolean,           //Boolean
       required: true,
       default: false               // ๋์ค์ conditional rendering ๋ง๋ค๊ธฐ
    },
    paidAt:{
        type : Date         //Date
    },
    isDeliverd:{                              
        type: Boolean,          
        required: true,
        default: false              
     },
    deliverdAt:{
        type : Date
    }    
  },
  {
    timestamps : true,
  }
);


const Oredr = mongoose.model('Oredr',orderSchema)

export default Oredr
