import {
  isEmailValid,
  isPasswordValid,
  showValidationError,
  hideValidationError,
} from "../../js/auth.js";

const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const eyeIcon = document.querySelector(".fa-eye");

const handleEmailFocusout = (e) => {
  const email = e.target.value;
  const validatedEmailType = isEmailValid(email);
  const errorMessage = validatedEmailType.error;

  if (errorMessage !== null) {
    return showValidationError(emailInput, emailError, errorMessage);
  } else {
    return hideValidationError(emailInput, emailError);
  }
};

const handlePasswordFocusout = (e) => {
  const password = e.target.value;
  const validatedPasswordType = isPasswordValid(password);
  const errorMessage = validatedPasswordType.error;

  if (errorMessage !== null) {
    return showValidationError(passwordInput, passwordError, errorMessage);
  } else {
    return hideValidationError(passwordInput, passwordError);
  }
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

function getUserByEmail(email) {
  return { email: "test@codeit.com", password: "codeit101" };
}

function loginUser({ email, password }) {
  const user = getUserByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
  }
}

const handleFormSubmit = (e) => {
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
    loginUser({ email, password });
    window.location.href = "../folder/index.html";
  } catch (error) {
    emailError.textContent = error;
    passwordError.textContent = error;
  }
};

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
showHideBtn.addEventListener("click", handleTogglePasswordShowButtonClick);
loginForm.addEventListener("submit", handleFormSubmit);
