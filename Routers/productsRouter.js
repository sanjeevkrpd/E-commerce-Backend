const express = require("express");
const {
  allDailyProductsCtrl,
  getProductByIdCtrl
} = require("../Controllers/productsCtrl");
const route = express.Router();


route.get("/allDailyProducts",allDailyProductsCtrl);

route.get("/:productId",getProductByIdCtrl);

module.exports = route;