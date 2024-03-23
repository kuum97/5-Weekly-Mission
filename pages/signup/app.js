import {
  isEmailValid,
  isPasswordValid,
  isPasswordConfirmValid,
  toggleValidationResult,
} from "../../js/auth.js";

const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const passwordConfirmError = document.getElementById("error-password-confirm");
const showHideBtns = document.querySelectorAll(".show-hide-password");
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

const handlePasswordConfirmFocusout = (e) => {
  const password = passwordInput.value;
  const confirmPassword = e.target.value;
  const validationResult = isPasswordConfirmValid(password, confirmPassword);

  toggleValidationResult(
    passwordConfirmInput,
    passwordConfirmError,
    validationResult.error
  );
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

function getUserByEmail(email) {
  if (email === "test@codeit.com") {
    return { email: "test@codeit.com" };
  } else {
    return null;
  }
}

function signUpUser(email) {
  const user = getUserByEmail(email);

  if (user !== null) {
    throw new Error("이미 사용 중인 이메일입니다.");
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordConfirmInput.value;

  if (!email) {
    return emailInput.focus();
  }

  if (!password) {
    return passwordInput.focus();
  }

  if (!confirmPassword) {
    return passwordConfirmInput.focus();
  }

  try {
    signUpUser(email);
    window.location.href = "../folder/index.html";
  } catch (error) {
    emailError.textContent = error;
  }
}

//=====================================
//Add Event listener

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
passwordConfirmInput.addEventListener(
  "focusout",
  handlePasswordConfirmFocusout
);
showHideBtns.forEach((showHideBtn) =>
  showHideBtn.addEventListener("click", handleTogglePasswordShowButtonClick)
);
loginForm.addEventListener("submit", handleFormSubmit);
