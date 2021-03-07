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
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reservation");
const finalCloseBtn = document.getElementById("finalCloseBtn");
const confirmation = document.getElementById("confirmation");

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

// REGEX
const firstAndLastValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
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

finalCloseBtn.style.display = "none";
confirmation.style.display = "none";

let formValid = false;

function validInput() {
  // Si le prenom est vide ou qu'il ne match pas avec la regex ou alors qu'il contient moins de 2 carracterres, le message d'erreur s'affiche
  if (firstAndLastValid.exec(first.value) === null || first.length < 2) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "3px";
    return formValid === false;
  } else {
    firstError.style.display = "none";
    first.style = "default";
  }
  return (formValid = true);
}

function validate(e) {
  e.preventDefault();

  validInputs();

  if (formValid === true) {
    form.style.display = "none";
    confirmation.style.fontSize = "30px";
    confirmation.style.textAlign = "center";

    finalCloseBtn.style.display = "block";
    submitBtn.style.display = "none";
    confirmation.style.display = "flex";
    closeBtn.addEventListener("click", closeModal);
    return true;
  }
}
