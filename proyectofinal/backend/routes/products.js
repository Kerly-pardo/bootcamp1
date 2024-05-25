var express = require('express');
var router = express.Router();
var productsService = require('../services/products');

/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getAllProducts = function (req, res, next) {
  productsService.getAllProducts()
    .then(products => res.json(products))
    .catch(err => next(err));
};

var createProduct = function (req, res, next) {
  productsService.createProduct(req.body)
    .then((product) => res.status(201).send(product))
    .catch(err =>res.status(400).json(err));
};

var getProductByProductName = function (req, res, next) {
  productsService.getProductByProductName(req.params.productName)  // Corregir aquí `userService` a `productsService`
    .then((product) => res.status(200).send(product))
    .catch(err => res.status(400).json(err));
};

var updateProductByProductName = function (req, res, next) {
  productsService.updateProductByProductName(req.params.productName, req.body)  // Corregir aquí `userService` a `productsService`
    .then((product) => res.json(product))
    .catch(err => res.status(400).json(err));
};

var deleteProductByProductName = (req, res, next) => {
  productsService.deleteProductByProductName(req.params.productName)  // Corregir aquí `userService` a `productsService` y `deleteProductByName`
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err));
};

// Usar el router de Express con las rutas y controladores definidos
router.get('/', getAllProducts);
router.post('/create', createProduct);
router.get('/:productName/detail', getProductByProductName);
router.put('/:productName/update', updateProductByProductName);
router.delete('/:productName/delete', deleteProductByProductName);

module.exports = router;  // Exportar el router de Express
  