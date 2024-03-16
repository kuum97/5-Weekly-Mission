import { isEmailValid, isPasswordValid } from "../../js/validate.js";

/* CONTROLLER LOGIC */

const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const eyeIcon = document.querySelector(".fa-eye");

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

const handleTogglePasswordShowButtonClick = (e) => {
  e.preventDefault();

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email.length === 0) {
    showErrorEmailInput(email);
    return emailInput.focus();
  }

  if (password.length === 0) {
    showErrorPasswordInput(password);
    return passwordInput.focus();
  }

  // 테스트용 코드=====================
  if (email === "test@codeit.com" && password === "codeit101") {
    window.location.href = "../folder/index.html";
  } else {
    emailInput.classList.add("error-border-red");
    emailError.innerText = "이메일 또는 비밀번호가 일치하지 않습니다.";
    passwordInput.classList.add("error-border-red");
    passwordError.innerText = "이메일 또는 비밀번호가 일치하지 않습니다.";
    return console.log("재시도하세요.");
  }
  // ===============================
};

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
showHideBtn.addEventListener("click", handleTogglePasswordShowButtonClick);
loginForm.addEventListener("submit", handleFormSubmit);
