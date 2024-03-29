import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <span>©codeit-2023</span>
      </div>
      <div>
        <a href="./pages/privacy/index.html">Privacy Policy</a>
        <a href="./pages/faq/index.html">FAQ</a>
      </div>
      <div>
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
