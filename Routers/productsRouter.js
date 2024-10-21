const express = require("express");
const { allDailyProductsCtrl } = require("../Controllers/productsCtrl");
const route = express.Router();


route.get("/allDailyProducts",allDailyProductsCtrl);


module.exports = route;