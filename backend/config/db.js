/* 

🍀강사-code
import mongoose from "mongoose";
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log(`Connected to MongoDB through: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: Could not connect to MongoDB... ${err.message}`);
    process.exit(1);
  }
};
export default connectDB;

*/


import mongoose from 'mongoose'

const connectDB = () => {
  
  async function main() {
    // await mongoose.connect('mongodb://localhost:27017/test');
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`IG - mongoose mongoDB connected`.underline.zebra.bold)        
  }

  main().catch(err => console.error(`IG-error : ${err.message}`.red.underline));
}

export default connectDB