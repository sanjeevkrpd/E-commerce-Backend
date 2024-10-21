const DailyProduct = require('../Models/dailyProduct');
const allDailyProductsCtrl = async(req,res)=>{


        try {

            const data = await DailyProduct.find();

            if(data){
                res.status(200).send({
                    message:"Daily Products Fetched Successfully",
                    success : true,
                    data
                });
            }else{
                res.status(400).send({
                    message:"No Daily Products Found",
                    success : false
                })
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Internal Server Error. Please try after some time. 😢" ,
                success : false
        })
       }
}


module.exports = {
    allDailyProductsCtrl
}