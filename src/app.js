import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"

const app = express();

//Configuration of express application 
///whenever we use middleware or did any application configuration, we can do it by app.use()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//data is recieved as json, body, form. So we have to limit it. For json
app.use(express.json({limit: "30kb"}));

//If we reiceve data from url then url data is little different so we need encoder to encode url Data as well
app.use(express.urlencoded({extended:true, limit: "20kb"}))

//Sometimes we want to store files, image, pdf then we make public asset so that every can access it. we put in static
app.use(express.static("public"));

//cookie-parser- if we want to perform any crud operation on cookies of user browser. 
app.use(cookieParser());

export { app } 