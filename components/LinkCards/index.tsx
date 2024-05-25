import { LinkData } from "@/types/link";
import LinkCard from "../LinkCard";
import styles from "../LinkCards.module.css";
import classNames from "classnames";

interface LinkCardsProp {
  links?: LinkData[];
}

function LinkCards({ links }: LinkCardsProp) {
  return typeof links === "undefined" ? (
    <div className={classNames(styles.container, styles.empty)}>
      저장된 링크가 없습니다.
    </div>
  ) : (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkCards;
