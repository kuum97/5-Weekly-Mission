import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";
import kakao from "../../../../../../assets/kakaotalk.png";
import facebook from "../../../../../../assets/facebook.png";
import share from "../../../../../../assets/share.png";

function SocialShareBox() {
  return (
    <>
      <h1 className={styles.title}>폴더 공유</h1>
      <h2 className={styles.subTitle}>폴더명</h2>
      <div className={styles.shareBox}>
        <div className={styles.shareButton}>
          <img src={kakao} alt="kakaoBtn" />
          <span>카카오톡</span>
        </div>
        <div className={styles.shareButton}>
          <img src={facebook} alt="facebookBtn" />
          <span>페이스북</span>
        </div>
        <div className={styles.shareButton}>
          <img src={share} alt="shareBtn" />
          <span>링크 복사</span>
        </div>
      </div>
    </>
  );
}

export default SocialShareBox;
