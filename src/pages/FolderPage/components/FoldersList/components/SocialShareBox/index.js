var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";
import kakao from "../../../../../../assets/kakaotalk.png";
import facebook from "../../../../../../assets/facebook.png";
import share from "../../../../../../assets/share.png";
import defaultImg from "../../../../../../assets/card-default.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function SocialShareBox({ title }) {
    const location = useLocation();
    const currentUrl = window.location.origin + location.pathname + location.search;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    useEffect(() => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init("a841341da0099a5d1291638b48030745");
        }
    }, []);
    const handleCopyToClipBoard = () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(currentUrl);
            alert("클립보드에 복사되었습니다!");
        }
        catch (error) {
            console.error("클립보드 복사 실패:", error);
            alert("클립보드 복사에 실패했습니다.");
        }
    });
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
    return (_jsxs(_Fragment, { children: [_jsx("h1", Object.assign({ className: styles.title }, { children: "\uD3F4\uB354 \uACF5\uC720" })), _jsx("h2", Object.assign({ className: styles.subTitle }, { children: "\uD3F4\uB354\uBA85" })), _jsxs("div", Object.assign({ className: styles.shareBox }, { children: [_jsxs("div", Object.assign({ className: styles.shareButtonWrapper }, { children: [_jsx("button", Object.assign({ className: styles.shareButton, onClick: () => handleShareToKakao(title) }, { children: _jsx("img", { src: kakao, alt: "kakaoBtn" }) })), _jsx("span", { children: "\uCE74\uCE74\uC624\uD1A1" })] })), _jsxs("div", Object.assign({ className: styles.shareButtonWrapper }, { children: [_jsx("a", Object.assign({ href: facebookShareUrl, target: "_blank", rel: "noopener noreferrer" }, { children: _jsx("button", Object.assign({ className: styles.shareButton }, { children: _jsx("img", { src: facebook, alt: "facebookBtn" }) })) })), _jsx("span", { children: "\uD398\uC774\uC2A4\uBD81" })] })), _jsxs("div", Object.assign({ className: styles.shareButtonWrapper }, { children: [_jsx("button", Object.assign({ onClick: handleCopyToClipBoard, className: styles.shareButton }, { children: _jsx("img", { src: share, alt: "shareBtn" }) })), _jsx("span", { children: "\uB9C1\uD06C \uBCF5\uC0AC" })] }))] }))] }));
}
export default SocialShareBox;
