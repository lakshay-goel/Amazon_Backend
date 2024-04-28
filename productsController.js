// const productModel = require("../model/productsModel")

// const getAllProducts = async (req , res )=> {
//     const data = await productModel.find();
//     console.log(data);
//     console.log(req.url);
//     res.json({
//         status :'success',
//         results: 0,
//         data:{
//             products: [],
//         }
//     })
// }
// const addProduct = (req , res) => {
//     console.log(req.body);
// res.json({
//     status: 'false',
// });
// }
// module.exports = {
//     getAllProducts
// }
//**************************************************************************************************** */

const { query } = require('express');
const productModel = require('../model/productsModel.js');
// const mongodb = require('mongoose');

const getAllProducts = async (req, res) => {
    const q = req.query;
    console.log(q);
    const products = await productModel.find();
    console.log(query);
    console.log(req.url);
    res.json({
        status: 'success',
        results: products.length, 
        data: {
            products: products,
        }
    })
}

const addProduct = async (req, res) => {
    try {
        const data = await productModel.create(req.body);
        console.log(data)
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        });

    }

    catch (err) {
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}


const replaceProduct = async (req, res) => {
    try {
      const reqId = req.query.id;
      console.log(reqId)
      const data = {...req.body, reqId}
      const result = await productModel.findOneAndUpdate({ _id: reqId }, data)
      res.send({
        status: 'success',
        result: 0,
        data: {
            productModel: [req.body]
        }
      })
    }
    catch (error) {
      res.status(500).send({
        status: 'error',
        result: 0,
        message: error.message
      })
    }
  }
  
  module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct
  }