import { isEmailValid, isPasswordValid } from "../../js/validate.js";

const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const passwordConfirmError = document.getElementById("error-password-confirm");
const eyeIcons = document.querySelectorAll(".fa-eye");

function showErrorEmailInput(email) {
  const validatedEmail = isEmailValid(email);

  if (!validatedEmail.isValid) {
    emailError.innerText = validatedEmail.message;
    emailInput.classList.add("error-border-red");
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("error-border-red");
  }
}

const handleEmailFocusout = (e) => {
  const email = e.target.value;

  showErrorEmailInput(email);
};

function showErrorPasswordInput(password) {
  const validatedPassword = isPasswordValid(password);

  if (!validatedPassword.isValid) {
    passwordError.innerText = validatedPassword.message;
    passwordInput.classList.add("error-border-red");
  } else {
    passwordError.innerText = "";
    passwordInput.classList.remove("error-border-red");
  }
}

const handlePasswordFocusout = (e) => {
  const password = e.target.value;

  showErrorPasswordInput(password);
};

function showErrorConfirmPasswordInput(confirmPassword) {
  if (confirmPassword !== passwordInput.value) {
    passwordConfirmError.innerText = "비밀번호가 일치하지 않습니다.";
    passwordConfirmInput.classList.add("error-border-red");
  } else {
    passwordConfirmError.innerText = "";
    passwordConfirmInput.classList.remove("error-border-red");
  }
}

const handlePasswordConfirmFocusout = (e) => {
  const confirmPassword = e.target.value;

  showErrorConfirmPasswordInput(confirmPassword);
};

const handleTogglePasswordShowButtonClick = (e) => {
  e.preventDefault();

  if (
    passwordInput.type === "password" &&
    passwordConfirmInput.type === "password"
  ) {
    passwordInput.type = "text";
    passwordConfirmInput.type = "text";
    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    });
  } else {
    passwordInput.type = "password";
    passwordConfirmInput.type = "password";
    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    });
  }
};

function handleFormSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordConfirmInput.value;

  if (email.length === 0) {
    showErrorEmailInput(email);
    return emailInput.focus();
  }

  if (password.length === 0) {
    showErrorPasswordInput(password);
    return passwordInput.focus();
  }

  if (confirmPassword.length === 0) {
    showErrorConfirmPasswordInput(confirmPassword);
    return passwordConfirmInput.focus();
  }

  window.location.href = "../login/index.html";
}

//=====================================
//Add Event listener

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
passwordConfirmInput.addEventListener(
  "focusout",
  handlePasswordConfirmFocusout
);
showHideBtn.addEventListener("click", handleTogglePasswordShowButtonClick);
loginForm.addEventListener("submit", handleFormSubmit);
