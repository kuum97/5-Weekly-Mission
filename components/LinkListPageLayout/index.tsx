import { ReactNode } from "react";
import Footer from "@/common/Footer";
import Header from "@/common/Header";

interface LinkListPageLayoutProp {
  children: ReactNode;
}

function LinkListPageLayout({ children }: LinkListPageLayoutProp) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LinkListPageLayout;
