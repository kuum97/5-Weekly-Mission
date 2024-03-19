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

export function isPasswordValid(password, confirmPassword = null) {
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

  if (confirmPassword !== null && confirmPassword !== password) {
    return { error: "비밀번호가 일치하지 않습니다." };
  }

  return { error: null };
}

/* error handling */

export function showValidationError(
  errorBorderElement,
  errorElement,
  errorMessage
) {
  errorBorderElement.classList.add("error-border-red");
  errorElement.textContent = errorMessage;
}

export function hideValidationError(errorBorderElement, errorElement) {
  errorBorderElement.classList.remove("error-border-red");
  errorElement.textContent = "";
}
