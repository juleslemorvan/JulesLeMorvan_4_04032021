function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitForm = document.getElementById("submit");
const form = document.getElementById("form");
const successForm = document.getElementById("successForm");
const successBtn = document.getElementById("successBtn");

// INPUT ET ERROR

const first = document.getElementById("first");
const firstError = document.getElementById("firstError");

const last = document.getElementById("last");
const lastError = document.getElementById("lastError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");

const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");

// // REGEX VALIDATION

// const emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

let formOk = false;

// button and message success hidden
successForm.style.display = "none";
successBtn.style.display = "none";

function checkFirst() {
  if (first.value.length < 2) {
    console.log("checkFirstIf");
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    formOk = false;
  } else {
    console.log("checkFirstElse");
    firstError.style.display = "none";
    first.style.borderColor = "initial";
    first.style.borderWidth = "initial";
    formOk = true;
  }
}

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();

  checkFirst();

  console.log(formOk);

  if (formOk === true) {
    form.style.display = "none";
    successForm.style.fontSize = "50px";
    successForm.style.minHeight = "300px";
    successForm.style.textAlign = "center";
    successBtn.style.display = "flex";
    successForm.style.display = "flex";
    successBtn.addEventListener("click", closeModal);
  }
}
