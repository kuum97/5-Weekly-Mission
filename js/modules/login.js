const loginForm = document.querySelector(".form-container");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const showHideBtn = document.querySelector(".show-hide-password");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const eyeIcon = document.querySelector(".fa-eye");

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

  true;
}

function isPasswordValid(password) {
  if (password.length === 0) {
    passwordError.innerText = "비밀번호를 입력해 주세요.";
    return false;
  }

  true;
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

function handlePasswordShowHideClick(e) {
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
}

function handleFormSubmit(e) {
  const email = emailInput.value;
  const password = passwordInput.value;

  // 테스트용 코드=====================
  if (email === "test@codeit.com" && password === "codeit101") {
    e.preventDefault();
    window.location.href = "../folder/index.html";
  }
  // ===============================

  if (email.trim().length === 0) {
    e.preventDefault();
    handleEmailFocusout();
    return emailInput.focus();
  }

  if (password.trim().length === 0) {
    e.preventDefault();
    handlePasswordFocusout();
    return passwordInput.focus();
  }

  console.log("제출이 완료되었습니다.");
}

//=====================================
//Add Event listener

emailInput.addEventListener("focusout", handleEmailFocusout);
passwordInput.addEventListener("focusout", handlePasswordFocusout);
showHideBtn.addEventListener("click", handlePasswordShowHideClick);
loginForm.addEventListener("submit", handleFormSubmit);
