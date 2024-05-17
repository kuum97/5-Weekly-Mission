import Image from "next/image";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.css";
import SocialButton from "@/common/SocialButton";

const socialSrcs: string[] = ["/images/kakaotalk.png", "/images/google.png"];

function Signin() {
  return (
    <>
      <div className={styles.loginContainer}>
        <header className={styles.header}>
          <Link className={styles.homeLink} href="/">
            <Image
              fill
              src="/images/Linkbrary.png"
              alt="logo"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
          <div className={styles.headerSecondLine}>
            <span>회원이 아니신가요?</span>
            <Link className={styles.toSignupLink} href="/signup">
              회원 가입하기
            </Link>
          </div>
        </header>
        <main className={styles.main}>
          <form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                이메일
              </label>
              <input
                className={styles.formInput}
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요."
              />
              <div id="error-email" className={styles.errorMessage}></div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                className={styles.formInput}
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <button
                type="button"
                className={styles.showHidePassword}
                aria-label="비밀번호 보기"
              >
                <FaEyeSlash className={styles.toggleVisibleBtn} />
              </button>
              <div id="error-password" className={styles.errorMessage}></div>
            </div>
            <button className={styles.submitBtn} type="submit">
              로그인
            </button>
          </form>
          <div className={styles.socialLoginContainer}>
            <span>소셜 로그인</span>
            <ul className={styles.socialLoginBtns}>
              {socialSrcs.map((src: string, i: number) => (
                <li className={styles.socialLoginBtn} key={i}>
                  <SocialButton>
                    <Image width={42} height={42} src={src} alt="logo" />
                  </SocialButton>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default Signin;
