// Imports
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const ProductModel = require("./models/product.model")
const ProductRouter = require("./routes/product.route")
const app = express();
const PORT = 5002
require("dotenv").config()
// Middleware
app.use(express.urlencoded({extended:true, limit:"100mb"}))
app.use(express.json({limit:"100mb"}))
app.use(cors())
app.use("/product",ProductRouter)
// const URI = process.env.MONGO_DB_URI
// mongoose.connect(URI)
// .then(()=>{
//     console.log("mongodb iyaf connect")
// })
// .catch((err)=>{
//     console.log("an err occured",err)
// })

app.listen(PORT,(err)=>{
    if(err){
        console.log("Node no gree startt")
    }else{
        console.log("Node iyfa start")
    }
})
