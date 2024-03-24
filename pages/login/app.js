import {
  isEmailValid,
  isPasswordValid,
  toggleValidationResult,
  togglePasswordShowButtonClick,
} from "../../js/auth.js";

const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const eyeIcons = document.querySelectorAll(".fa-eye");

const handleEmailFocusout = (e) => {
  const email = e.target.value;
  const validationResult = isEmailValid(email);

  toggleValidationResult(emailInput, emailError, validationResult.error);
};

const handlePasswordFocusout = (e) => {
  const password = e.target.value;
  const validationResult = isPasswordValid(password);

  toggleValidationResult(passwordInput, passwordError, validationResult.error);
};

const handleTogglePasswordShowButtonClick = (e) => {
  e.preventDefault();

  togglePasswordShowButtonClick(passwordInput, eyeIcons);
};

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email) {
    return emailInput.focus();
  }

  if (!password) {
    return passwordInput.focus();
  }

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      return (window.location.href = "../folder/index.html");
    }

    if (response.status === 400) {
      emailError.textContent = "이메일 또는 비밀번호가 일치하지 않습니다.";
      passwordError.textContent = "이메일 또는 비밀번호가 일치하지 않습니다.";
      return;
    }
  } catch (error) {
    return console.log(error);
  }
};

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
showHideBtn.addEventListener("click", handleTogglePasswordShowButtonClick);
loginForm.addEventListener("submit", handleFormSubmit);
