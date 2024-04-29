import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";
import kakao from "../../../../../../assets/kakaotalk.png";
import facebook from "../../../../../../assets/facebook.png";
import share from "../../../../../../assets/share.png";
import defaultImg from "../../../../../../assets/card-default.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SocialShareBox({ title }) {
  const location = useLocation();
  const currentUrl =
    window.location.origin + location.pathname + location.search;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("a841341da0099a5d1291638b48030745");
    }
  }, []);

  const handleCopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("클립보드에 복사되었습니다!");
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  const handleShareToKakao = (title) => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: "유용한 링크를 모은 폴더를 공유합니다.",
        imageUrl: defaultImg,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <>
      <h1 className={styles.title}>폴더 공유</h1>
      <h2 className={styles.subTitle}>폴더명</h2>
      <div className={styles.shareBox}>
        <div className={styles.shareButtonWrapper}>
          <button
            className={styles.shareButton}
            onClick={() => handleShareToKakao(title)}
          >
            <img src={kakao} alt="kakaoBtn" />
          </button>
          <span>카카오톡</span>
        </div>
        <div className={styles.shareButtonWrapper}>
          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
            <button className={styles.shareButton}>
              <img src={facebook} alt="facebookBtn" />
            </button>
          </a>
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
