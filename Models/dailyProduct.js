const mongoose = require('mongoose');

const dailyProductSchema = new mongoose.Schema({

    productName : {
        type : String,
        required : [true, "Product Name is Requied"]
    },
    productPrice : {
        type : Number,
        required : [true , "Price is Required"]
    },
    date: { 
        type: Date, default: Date.now 
    },
    expDate:{
        type : Date,
        required : [true, "Expiry date required."]
    }
});

const DailyProduct = mongoose.model('DailyProduct',dailyProductSchema);

module.export = DailyProduct;