/* validation logic */

export function isEmailValid(email) {
  if (email.length === 0) {
    return { error: "이메일을 입력해 주세요." };
  }

  if (!email.includes("@")) {
    return {
      error: "올바른 형식으로 입력해 주세요. 예: example@email.com",
    };
  }

  return { error: null };
}

export function isPasswordValid(password) {
  if (password.length === 0) {
    return { error: "비밀번호를 입력해 주세요." };
  }

  if (
    password.length < 8 ||
    !(/\d/.test(password) && /[A-Za-z]/.test(password))
  ) {
    return {
      error: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    };
  }

  return { error: null };
}

export function isPasswordConfirmValid(password, confirmPassword) {
  if (confirmPassword.length === 0) {
    return { error: "비밀번호를 한 번 더 입력해주세요." };
  }

  if (password !== confirmPassword) {
    return { error: "비밀번호가 일치하지 않습니다." };
  }

  return { error: null };
}

/* error handling */

function showValidationError(errorBorderElement, errorElement, errorMessage) {
  errorBorderElement.classList.add("error-border-red");
  errorElement.textContent = errorMessage;
}

function hideValidationError(errorBorderElement, errorElement) {
  errorBorderElement.classList.remove("error-border-red");
  errorElement.textContent = "";
}

export function toggleValidationResult(
  errorBorderElement,
  errorElement,
  errorMessage
) {
  if (errorMessage) {
    return showValidationError(errorBorderElement, errorElement, errorMessage);
  }

  return hideValidationError(errorBorderElement, errorElement, errorMessage);
}
