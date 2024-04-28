/**
 *@author Kerly Dayana Pardo Rivera <kerlydayanapardo@gmail.com>
 *@fileoverview this scrip use form tag,layout the bootstrap,function getuserDataForm
 *@licence BSD 3-clause Licence
 */

let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};

const getProductDataForm = () => {
    productName = document.getElementById("productName").value;
    productType = document.getElementById("productType").value;
    quantity = document.getElementById("quantity").value;
    price = document.getElementById("price").value;
    latitude = document.getElementById("latitude").value;
    longitude = document.getElementById("longitude").value;
}

const buildProductDataForRequest = () => {
    getProductDataForm();
    product = {
        product_name: productName,
        product_type: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude,
    };
    console.log(product); 
}

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    buildProductDataForRequest();
});