// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectdb from "./db/index.js";

connectdb();
dotenv.config({
  path: "./env",
});
// import express from "express"
// const app =express()
// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error",(error)=>{
//         console.log("ERROR:",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`listening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.log("ERROR",error)
//         throw error
//     }
// })()
