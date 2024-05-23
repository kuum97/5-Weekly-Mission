import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { ReactNode } from "react";
import styles from "@/styles/CardsPageLayout.module.css";

interface CardsPageLayoutProp {
  children: ReactNode;
}

function CardsPageLayout({ children }: CardsPageLayoutProp) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default CardsPageLayout;
