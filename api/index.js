import express from "express";

import authRoutes from "./routes/auth.route.js"
import mongoose from "mongoose"
import cors from "cors"


import dotenv from "dotenv";

dotenv.config();

mongoose
.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log('MongoDB connected successful')
})

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(PORT,async()=>{
    console.log(`Server is running on ${PORT}`)
})


app.use("/api/auth", authRoutes)



