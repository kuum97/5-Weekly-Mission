import { LinkData } from "@/types/api";
import LinkCard from "../LinkCard";
import styles from "./index.module.css";

interface LinkCardsProp {
  links?: LinkData[];
}

function LinkCards({ links }: LinkCardsProp) {
  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {links?.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkCards;
