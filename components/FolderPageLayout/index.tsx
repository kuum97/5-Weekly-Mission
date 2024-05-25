import { ReactNode } from "react";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import LinkAddForm from "@/components/LinkAddForm";
import SearchBar from "@/common/SearchBar";
import FoldersList from "../FoldersList";
import styles from "@/styles/LinkListPage.module.css";

interface FolderPageLayoutProp {
  children: ReactNode;
}

function FolderPageLayout({ children }: FolderPageLayoutProp) {
  const handleSearchByKeyword = (keyword: string) => {
    // if (!links) return console.log("링크가 존재하지 않습니다!");
    // const searchedLink = links?.filter((link) => link.title?.includes(keyword));
    // if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
  };

  return (
    <>
      <Header />
      <LinkAddForm />
      <main className={styles.mainContainer}>
        <SearchBar onSearch={handleSearchByKeyword} />
        <FoldersList />
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}

export default FolderPageLayout;
