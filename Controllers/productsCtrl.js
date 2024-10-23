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

const getProductByIdCtrl = async (req, res) => {
  try {
     const { id } = req.params;  
    
    if (!id) {

      return res.status(400).send({
        message: "Bad API Call: ID is required",
        success: false
      });
    }

    const product = await DailyProduct.findById(id); 
   
   

    if (product) {
      return res.status(200).send({
        message: "Product Fetched Successfully",
        success: true,
        product
      });
    } else {
      return res.status(404).send({
        message:
          "The product that you are looking for is either out of stock or finished.",
        success: false
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Internal Server Error. Please try again later. 😢",
      success: false
    });
  }
};


module.exports = {
  allDailyProductsCtrl,
  getProductByIdCtrl
};