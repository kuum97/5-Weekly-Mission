import { useRef } from "react";
import AuthHeader from "@/common/Auth/Header";
import SigninForm from "@/common/Auth/Form/Signin";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";

function Signin() {
  const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signin" />
      <main className={styles.main}>
        <SigninForm ref={inputRef} />
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signin;
