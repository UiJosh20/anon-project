const mongoose = require("mongoose")
const ProductSchema = mongoose.Schema({
    productName : {type:String,required:true},
    productPrice : {type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String, required:true},
    dateAdded:{type:String, default:Date.now()}
})
const ProductModel = mongoose.model("products_collection",ProductSchema)
module.exports = ProductModel