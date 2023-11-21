//Connection of Database
import mongoose from "mongoose";
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "backendapi",
    }).then(()=>
        console.log("Database connected")).catch(()=>
    console.log("Database not connected"));  
};