import { SampleLink } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import SharedLinkCard from "@/components/SharedLinkCard";
import styles from "@/components/LinkCards.module.css";
import { useState } from "react";

interface SharedLinkCardsProps {
  links: SampleLink[];
}

function SharedLinkCards({ links }: SharedLinkCardsProps) {
  const [searchedLinks, setSearchedLinks] = useState<SampleLink[] | null>(null);

  const handleSearchByKeyword = (keyword: string) => {
    if (!links) return console.log("링크가 존재하지 않습니다!");
    const searchedLink = links?.filter((link) =>
      link.description?.toLowerCase().includes(keyword.toLowerCase())
    );
    if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
    setSearchedLinks(searchedLink);
  };

  return (
    <section className={styles.container}>
      <SearchBar onSearch={handleSearchByKeyword} />
      <ul className={styles.linkList}>
        {(searchedLinks ? searchedLinks : links).map((link) => (
          <li key={link.id}>
            <SharedLinkCard link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SharedLinkCards;
