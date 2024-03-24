export function isEmailValid(email) {
  if (email.length === 0) {
    return { isValid: false, message: "이메일을 입력해 주세요." };
  }

  if (!email.includes("@")) {
    return {
      isValid: false,
      message: "올바른 형식으로 입력해 주세요. 예: example@email.com",
    };
  }

  return { isValid: true, message: "" };
}

export function isPasswordValid(password) {
  if (password.length === 0) {
    return { isValid: false, message: "비밀번호를 입력해 주세요." };
  }

  return { isValid: true, message: "" };
}
