const express=require('express');

const app=express();
const dotenv=require('dotenv')
const cors=require("cors")
const bodyparser=require("body-parser")
const dbConnect= require("./config/db")
const userRouter = require("./routes/userRouter")
dotenv.config()
const port=process.env.PORT;
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

dbConnect()
app.use("/api/auth",userRouter)
app.listen(port,()=>console.log(`server is running on port ${port}`,))