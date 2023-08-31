import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    discount:String,
    rating:String,
    stock:Number,
    brand:String,
    category:String,
    thumbnail:String,
    images:Array,
    discountPercentage:String,
    description:String,
    tagline:String
})

const Product = mongoose.model('product',ProductSchema);


export default Product;