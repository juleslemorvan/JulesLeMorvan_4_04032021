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
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location2 = document.getElementsByName("location");
const place = document.getElementById("place");
const conditions = document.getElementById("checkbox1");

const error = document.querySelectorAll("[data-error]");

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

let formOk = true;

// button and message success hidden
successForm.style.display = "none";
successBtn.style.display = "none";

// Function input firstName must contain at least 2 characters and match the regex
function checkFirst() {
  const nameValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
  if (
    nameValid.exec(first.value.trim()) === null ||
    first.value.trim().length < 2
  ) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner un Prénom valide (2 carracteres min)"
    );
    formOk = false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
  }
}

// Function input lastName must contain at least 2 characters and match the regex
function checkLast() {
  const nameValid = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
  if (
    nameValid.exec(last.value.trim()) === null ||
    last.value.trim().length < 2
  ) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner un Nom valide (2 carracteres min)"
    );
    formOk = false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
  }
}
// Function input email
function checkEmail() {
  const emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  // test@test.com (valid)
  if (emailValid.exec(email.value.trim()) === null) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner un Email valide"
    );
    formOk = false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
  }
}

var date_diff_indays = function (date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};

function checkBirthdate() {
  let currentDate = new Date();
  // user birth year
  let userBirthDate = new Date(birthdate.value);

  if (!birthdate.value) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner votre date de naissance"
    );
    formOk = false;
  } else if (date_diff_indays(userBirthDate, currentDate) / 365.25 < 18) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute("data-error", "Vous etes mineurs");
    formOk = false;
  } else if (date_diff_indays(userBirthDate, currentDate) / 365.25 > 100) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute("data-error", " vous êtes trop vieux");
    formOk = false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
  }
}

//function input quantity (0-9)

function checkQuantity() {
  const quantityValid = /^[0-9]*$/;
  if (
    quantityValid.exec(quantity.value.trim()) === null ||
    quantity.value == ""
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute(
      "data-error",
      "Veuillez remplir ce champs"
    );
    formOk = false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
  }
}

// function input location checkbox

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
    place.setAttribute("data-error-visible", "true");
    place.setAttribute("data-error", "Veuillez cocher au moins une case");
    formOk = false;
  } else {
    place.setAttribute("data-error-visible", "false");
  }
}

//function condition CGU

function checkConditions() {
  if (!conditions.checked) {
    conditions.parentElement.setAttribute("data-error-visible", "true");
    conditions.parentElement.setAttribute(
      "data-error",
      "Veuillez accepter les conditions"
    );
    formOk = false;
  } else {
    conditions.parentElement.setAttribute("data-error-visible", "false");
  }
}

//function Validate form

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();
  formOk = true;

  checkFirst();

  checkLast();

  checkEmail();

  checkBirthdate();

  checkQuantity();

  checkLocation();

  checkConditions();

  //display the success form

  if (formOk) {
    form.style.display = "none";
    successForm.style.fontSize = "50px";
    successForm.style.minHeight = "300px";
    successForm.style.textAlign = "center";
    successBtn.style.display = "flex";
    successForm.style.display = "flex";
    successBtn.addEventListener("click", closeModal);
  }
}
