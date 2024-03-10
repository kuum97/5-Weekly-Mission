const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const passwordConfirmError = document.getElementById("error-password-confirm");
const eyeIcons = document.querySelectorAll(".fa-eye");

//=====================================
//Utility Function

function isEmailValid(email) {
  if (email.length === 0) {
    emailError.innerText = "이메일을 입력해 주세요.";
    return false;
  }

  if (!email.includes("@")) {
    emailError.innerText =
      "올바른 형식으로 입력해 주세요. 예: example@email.com";
    return false;
  }

  return true;
}

function isPasswordValid(password) {
  if (password.length === 0) {
    passwordError.innerText = "비밀번호를 입력해 주세요.";
    return false;
  }

  return true;
}

function isConfirmPasswordValid(confirmPassword) {
  if (confirmPassword.length === 0) {
    passwordConfirmError.innerText = "비밀번호 확인을 입력해 주세요.";
    return false;
  }

  if (confirmPassword !== passwordInput.value) {
    passwordConfirmError.innerText = "비밀번호가 일치하지 않습니다.";
    return false;
  }

  return true;
}

//=====================================
//Event Handler Function

function handleEmailFocusout() {
  const isValid = isEmailValid(emailInput.value);

  if (isValid === false) {
    emailInput.classList.add("error-border-red");
    return console.log("다시 입력하세요.");
  } else {
    emailInput.classList.remove("error-border-red");
    emailError.innerText = "";
    return console.log("올바르게 입력했습니다.");
  }
}

function handlePasswordFocusout() {
  const isValid = isPasswordValid(passwordInput.value);

  if (isValid === false) {
    passwordInput.classList.add("error-border-red");
    return console.log("다시 입력하세요.");
  } else {
    passwordInput.classList.remove("error-border-red");
    passwordError.innerText = "";
    return console.log("올바르게 입력했습니다.");
  }
}

function handlePasswordConfirmFocusout() {
  const isValid = isConfirmPasswordValid(passwordConfirmInput.value);

  if (isValid === false) {
    passwordConfirmInput.classList.add("error-border-red");
    return console.log("다시 입력하세요.");
  } else {
    passwordConfirmInput.classList.remove("error-border-red");
    passwordConfirmError.innerText = "";
    return console.log("올바르게 입력했습니다.");
  }
}

function handlePasswordShowHideClick(e) {
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
}

function handleFormSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordConfirmInput.value;

  if (email.trim().length === 0) {
    handleEmailFocusout();
    return emailInput.focus();
  }

  if (password.trim().length === 0) {
    handlePasswordFocusout();
    return passwordInput.focus();
  }

  if (confirmPassword.trim().length === 0) {
    handlePasswordConfirmFocusout();
    return passwordConfirmInput.focus();
  }

  if (confirmPassword !== password) {
    handlePasswordConfirmFocusout();
    return passwordConfirmInput.focus();
  }

  console.log("제출이 완료되었습니다.");
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
showHideBtn.addEventListener("click", handlePasswordShowHideClick);
loginForm.addEventListener("submit", handleFormSubmit);
