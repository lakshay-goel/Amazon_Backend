const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    title:String,
    price:Number,
})
const productModel=mongoose.model('Products',productSchema);  
module.exports = productModel;


// 


