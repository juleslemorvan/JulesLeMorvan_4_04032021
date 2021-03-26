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
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    formOk = false;
  } else {
    firstError.style.display = "none";
    first.style.borderColor = "initial";
    first.style.borderWidth = "initial";
    formOk = true;
  }
}

function checkLast() {
  if (last.value.length < 2) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    lastError.style.fontSize = "10px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    formOk = false;
  } else {
    lastError.style.display = "none";
    last.style.borderColor = "initial";
    last.style.borderWidth = "initial";
    formOk = true;
  }
}
function checkEmail() {
  const emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (emailValid.exec(email.value) === null) {
    emailError.textContent = "Veuillez Nous fournir une adresse Email valide";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    formOk = false;
  } else {
    emailError.style.display = "none";
    email.style.borderColor = "initial";
    email.style.borderWidth = "initial";
    formOk = true;
  }
}

function checkBirthdate() {
  if (!birthdate.value) {
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    formOk = false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style.borderColor = "initial";
    birthdate.style.borderWidth = "initial";
    formOk = true;
  }
}
function checkQuantity() {
  if (quantity.value === "" || isNaN(quantity.value)) {
    quantityError.textContent = "Veuillez completer ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return formOk === false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
    formOk = true;
  }
}
function checkLocation() {
  if (
    !(
      location2[0].checked ||
      location2[1].checked ||
      location2[2].checked ||
      location2[3].checked ||
      location2[4].checked ||
      location2[5].checked
    )
  ) {
    locationError.textContent = "Veuillez cocher une case au minimum";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return formOk === false;
  } else {
    locationError.style.display = "none";
    location2.style = "default";
    formOk = true;
  }
}

function checkConditions() {
  if (!conditions.checked) {
    conditionsError.textContent =
      "Veuillez accepter les conditions d'utilisations";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return formOk === false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
  return formOk === true;
}

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();

  checkFirst();
  console.log(formOk);
  checkLast();
  console.log(formOk);
  checkEmail();
  console.log(formOk);
  checkBirthdate();
  console.log(formOk);
  checkQuantity();
  console.log(formOk);
  checkLocation();
  console.log(formOk);
  checkConditions();
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
