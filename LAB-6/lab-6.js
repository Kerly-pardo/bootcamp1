/**
 *@author Kerly Dayana Pardo Rivera <kerlydayanapardo@gmail.com>
 *@fileoverview this scrip use form tag,layout the bootstrap,function getuserDataForm
 *@licence BSD 3-clause Licence
 */
let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};
let login = {};

const getProductDataForm = () => {
  productName = document.getElementById("productName").value;
  productType = document.getElementById("productType").value;
  quantity = document.getElementById("quantity").value;
  price = document.getElementById("price").value;
  latitude = document.getElementById("latitude").value;
  longitude = document.getElementById("longitude").value;
};

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
};

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    buildProductDataForRequest();

    let email = "";
    let name = "";
    let lastname = "";
    let phone = "";
    let pass = "";
    let user = {};
    let login = {};

    //use the function getUserDataForm

    const getUserDataForm = () => {
      email = document.getElementById("email").value;
      name = document.getElementById("Name").value;
      lastname = document.getElementById("lastname").value;
      phone = document.getElementById("phone").value;
      pass = document.getElementById("password").value;
    };
    //function buildUserDataForm
    const buildUserDataForRequest = () => {
      user = {
        email: email,
        name: name,
        lastname: lastname,
        phone: phone,
        pass: pass,
      };
    };

    document
      .getElementById("userDataForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        getUserDataForm();
        buildUserDataForRequest();
        console.log(user);
      });

    //use the function getLoginDataForm

    const getLoginDataForm = () => {
      email = document.getElementById("email").value;
      pass = document.getElementById("password").value;
    };
    //function buildLoginDataForm
    const buildLoginDataForRequest = () => {
      login = {
        email: email,
        pass: pass,
      };
    };

    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        getLoginDataForm();
        buildLoginDataForRequest();
        console.log(login);
      });
  });
