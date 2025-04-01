// we want, as app loads all enviroment variables should be available on whole app. So we have to do this below
// require('dotenv').config({path:'./env' });
//so to maintain the consisteency of like below import
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/indexdb.js";

dotenv.config({
    path:'./env'
})

const app = express();

//connectDB is async operation. so it will return promise then we have to catch it
//.After successfull connetion, we have to make server.
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!!", err
    );
})







/*

import express from "express";
const app = express();

First Approach

we can connect databse by using IIFE, professionaly.
we have always use try catch block to connect with database
;(async()=>{
    try{
           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
           app.on("error",(error)=>{
            console.log(error);
            throw error;
            })
           app.listen(process.env.PORT, ()=>{
             console.log(`App is listening on ${process.env.PORT}`);
             })
    }catch(error){
           console.error("ERROR", error);
        
    }
})()
*/

