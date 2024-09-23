require("dotenv").config()
const ProductModel = require("../models/product.model")
const cloudinary = require("cloudinary").v2


let cloud_name = process.env.Cloud_Name
let cloud_api = process.env.Cloud_API
let cloud_api_secret = process.env.Cloud_Secret

cloudinary.config({
    cloud_name:cloud_name,
    api_key:cloud_api,
    api_secret:cloud_api_secret
})

const fetchAllProduct = (req,res)=>{
    ProductModel.find()
    .then((products)=>{
        console.log(products)
    })
}
const createProduct = (req,res)=>{
    console.log(req.body)
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("saved successfully")
        res.send({status:true,message:"Data Saved Successfully"})
    })
    .catch((err)=>{
        console.log("e no gree save",err)
        res.send({status:false,message:"Data did not save"})
    })
}

const uploadImage = (req,res)=>{
   let media = req.body.media

   cloudinary.uploader.upload(media, (error, result)=>{
    let mediaUrl = result.secure_url;
    res.send({mediaUrl:mediaUrl})
    
   })
    
}
module.exports ={
    fetchAllProduct, createProduct, uploadImage
}