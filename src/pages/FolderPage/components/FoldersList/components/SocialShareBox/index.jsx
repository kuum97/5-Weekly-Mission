import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";
import kakao from "../../../../../../assets/kakaotalk.png";
import facebook from "../../../../../../assets/facebook.png";
import share from "../../../../../../assets/share.png";
import { useLocation } from "react-router-dom";

function SocialShareBox() {
  const location = useLocation();

  const handleCopyToClipBoard = async () => {
    const url = window.location.origin + location.pathname + location.search;
    try {
      await navigator.clipboard.writeText(url);
      alert("클립보드에 복사되었습니다!");
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <>
      <h1 className={styles.title}>폴더 공유</h1>
      <h2 className={styles.subTitle}>폴더명</h2>
      <div className={styles.shareBox}>
        <div className={styles.shareButtonWrapper}>
          <button className={styles.shareButton}>
            <img src={kakao} alt="kakaoBtn" />
          </button>
          <span>카카오톡</span>
        </div>
        <div className={styles.shareButtonWrapper}>
          <button className={styles.shareButton}>
            <img src={facebook} alt="facebookBtn" />
          </button>
          <span>페이스북</span>
        </div>
        <div className={styles.shareButtonWrapper}>
          <button
            onClick={handleCopyToClipBoard}
            className={styles.shareButton}
          >
            <img src={share} alt="shareBtn" />
          </button>
          <span>링크 복사</span>
        </div>
      </div>
    </>
  );
}

export default SocialShareBox;
