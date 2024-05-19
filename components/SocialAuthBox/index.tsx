import SocialButton from "@/common/Button/SocialButton";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { SOCIALLINKS } from "@/constants";

function SocialAuthBox() {
  return (
    <div className={styles.socialLoginContainer}>
      <span>소셜 로그인</span>
      <ul className={styles.socialLoginBtns}>
        {SOCIALLINKS.map(({ src, href }, i: number) => (
          <li key={i}>
            <SocialButton>
              <Link href={href}>
                <Image width={42} height={42} src={src} alt="logo" />
              </Link>
            </SocialButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialAuthBox;
