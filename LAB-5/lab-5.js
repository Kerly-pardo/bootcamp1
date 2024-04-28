/**
 * @author Kerly Dayana Pardo Rivera <kerlydayanapardo@gmail.com>
 * @fileoverview this script uses form tags, functions to getLogindataform, and buildLoginDataForRequest
 * @license BSD 3-clause License
 */

let email = "";
let pass = "";
let login = {};

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
