import { LinkData } from "@/types/api";
import LinkCard from "../LinkCard";
import styles from "./index.module.css";
import { useStoreState } from "@/hooks/state";

interface LinkCardsProp {
  links?: LinkData[];
}

function LinkCards({ links }: LinkCardsProp) {
  const { searchQuery } = useStoreState();
  const searchedLinks = links?.filter(
    ({ description }) => searchQuery && description?.includes(searchQuery)
  );

  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {(searchQuery ? searchedLinks : links)?.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkCards;
