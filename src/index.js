// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectdb from "./db/index.js";
import app from "./app.js";
dotenv.config({
  path: "./env",
});

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runnning at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FALIED", err);
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
