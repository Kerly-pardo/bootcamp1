var express = require('express');
var router = express.Router();
var  products = require('../mocks/products.json');
var db = require('../config/db.js');
var products =db.products



/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getAllProducts = async function () {
  return products.find();
};
var createProduct = async function (productParam){ 
  return new Promise(function(resolve, reject) {
      resolve(products[0]);
      reject(error);
  });
};

var getProductByProductName = async function (productName){
  return new Promise(function(resolve, reject) {
      var product = {
          id: products[0].id,
          name: products[0].name,
          typeProduct: products[0].typeProduct,
          quantity: products[0].quantity,
          price: products[0].price,
          latitude: products[0].latitude,
          longitude: products[0].longitude,
          status: products[0].status

      };
      resolve(product);
      reject(error);
  });
};




var  updateProductByProductName= function (productName, productParam) {
  return new Promise(function(resolve, reject) {   
    //ToDo: remove when the DB implemented     
    var productUpdate = {};
    productUpdate.Name = productParam.Name;
    productUpdate.productType= productParam.productType;
    productUpdate.quantity = productParam.quantity;
    productUpdate.price = productParam.price;
    productUpdate.latitude = productParam.latitude;
    productUpdate.longitude = productParam.longitude;
    productUpdate.status = productParam.status;

    resolve(productUpdate);
    reject(error);

});
};

var deleteProductByProductName= async function (productName){
  return new Promise((resolve, reject) => {
      resolve(); //ToDo: remove when the DB implemented
      reject(error);
  });
};






module.exports = {
    getAllProducts,
    createProduct,
    getProductByProductName,
    updateProductByProductName,
    deleteProductByProductName,}