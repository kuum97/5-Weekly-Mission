import classNames from "classnames";
import styles from "./index.module.css";

function EmptyLinkCards() {
  return (
    <div className={classNames(styles.container, styles.empty)}>
      저장된 링크가 없습니다.
    </div>
  );
}

export default EmptyLinkCards;
