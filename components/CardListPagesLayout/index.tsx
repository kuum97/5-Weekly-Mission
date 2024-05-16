import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { useUserState } from "@/hooks/useUserState";
import { ReactNode } from "react";

interface CardListPagesLayoutProp {
  children: ReactNode;
}

function CardListPagesLayout({ children }: CardListPagesLayoutProp) {
  const { user } = useUserState();

  if (!user) {
    <div>로그인 해주세요!</div>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default CardListPagesLayout;
