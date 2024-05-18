import SocialButton from "@/common/Button/SocialButton";
import Image from "next/image";
import styles from "./index.module.css";

const socialSrcs: string[] = ["/images/kakaotalk.png", "/images/google.png"];

function SocialAuthBox() {
  return (
    <div className={styles.socialLoginContainer}>
      <span>소셜 로그인</span>
      <ul className={styles.socialLoginBtns}>
        {socialSrcs.map((src: string, i: number) => (
          <li key={i}>
            <SocialButton>
              <Image width={42} height={42} src={src} alt="logo" />
            </SocialButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialAuthBox;
