const express = require('express');
const producController = require('../controller/productsController.js');
const productRouter = express.Router();

productRouter.route('/')
.get(producController.getAllProducts)
.post(producController.addProduct)
.put(producController.replaceProduct);

module.exports =productRouter;

