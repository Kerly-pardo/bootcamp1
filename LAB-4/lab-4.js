/**
 * @author Kerly Dayana Pardo Rivera <kerlydayanapardo@gmail.com>
 * @fileoverview this script uses form tags, functions to getuserdataform, and buildUserDataForRequest
 * @license BSD 3-clause License
 */

let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};
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
