const express = require("express");
const {
  allDailyProductsCtrl,
  getProductByIdCtrl
} = require("../Controllers/productsCtrl");
const route = express.Router();


route.get("/allDailyProducts",allDailyProductsCtrl);

route.get("/:id",getProductByIdCtrl);

module.exports = route;