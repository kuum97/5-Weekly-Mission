import { useState } from "react";
import FavoriteLinkCards from "./components/FavoriteLinkCards";
import Footer from "./components/Footer";
import GlobalNavigationBar from "./components/GlobalNavigationBar";
import SearchBar from "./components/SearchBar";
import UserFavoriteTitle from "./components/UserFavoriteTitle";
import { getUser } from "./api";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState("");

  const handleLogin = async () => {
    try {
      const user = await getUser();
      if (!user) {
        throw new Error("존재하지 않는 유저입니다.");
      }
      setIsUserLoggedIn(true);
      setUserData(user);
      return userData;
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <>
      <GlobalNavigationBar
        handleLogin={handleLogin}
        userData={userData}
        isUserLoggedIn={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <UserFavoriteTitle userData={userData} />
      ) : (
        <div>로그인해주세요.</div>
      )}
      <div>
        {/* container 컴포넌트로 스타일 적용 가능할 듯 함 */}
        <SearchBar />
        <FavoriteLinkCards />
      </div>
      <Footer />
    </>
  );
}

export default App;
