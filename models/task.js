//Creation of Schema

import mongoose from "mongoose";
const schema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        select: false,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default: false,
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
   createdAt:{
    type:Date,
    default:Date.now,
   },
});

//Made a collection named schema
export const Task = mongoose.model("Task", schema, "Task");