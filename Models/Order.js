const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId : {
        type : String,
        required : [true, "Product Id is required"]
    },
    quantity : {
        type : Number,
        required : [true, "quantity is required"]
    },
    status : {
        type : Boolean,
        required : [true , "status is required"]
    },
    


})