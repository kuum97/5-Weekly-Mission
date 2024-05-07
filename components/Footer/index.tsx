import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.companyInfo}>
        <span>©codeit-2023</span>
      </div>
      <div className={styles.forUser}>
        <a href="./pages/privacy/index.html">Privacy Policy</a>
        <a href="./pages/faq/index.html">FAQ</a>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
