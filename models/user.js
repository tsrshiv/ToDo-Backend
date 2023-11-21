//Creation of Schema

import mongoose from "mongoose";
const schema= new mongoose.Schema({
    name:{
       type:String,
       required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
   createdAt:{
    type:Date,
    default:Date.now,
   },
});

//Made a collection named schema
export const User = mongoose.model("User", schema, "User");