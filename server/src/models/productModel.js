import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title: {type:String,required:true},
    image: {type:String,default:""},
    price: {type:String,required:true},
})

export default mongoose.model("products",productModel)


