import { useRef } from "react";
import AuthHeader from "@/common/Auth/Header";
import SignupForm from "@/common/Auth/Form/Signup";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";

function Signup() {
  const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signup" />
      <main className={styles.main}>
        <SignupForm ref={inputRef} />
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signup;
