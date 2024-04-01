import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        ProductName:{
            type:String,
            required:true,
            
        },
        ProductSpecs:{
            type:String,
            required:true
        },
        ProductPrice:{
            type:String,
            required:true
        },
        
    },
    { timestamps:true}
)

const Product = mongoose.model("Product",productSchema)
export default Product