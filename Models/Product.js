const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productName : {
        type : String,
        required : [true, "Product Name is Requied"]
    },
    productCategory : {
        type : String,
        required : [true, "Product Category is Required"]
    },
    productPrice : {
        type : Number,
        required : [true , "Price is Required"]
    },
    productQuantity : {
        type : Number,
        required : [true , "Quantity is Required"]
    },
    productImage : {
        type : String,
        required : [true ,"Image is required"]
    },
    productDescription : {
        type: String,
        required : [true,"Product Description is required"]
    },
    date: { 
        type: Date, default: Date.now 
    },
   productGender : {
    type : String,
    required : [true , "Gender is Required"]
   }
});

const ProductSchema = mongoose.model('ProductSchema',productSchema);

module.export = productSchema;