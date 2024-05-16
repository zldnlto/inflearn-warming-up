import React from "react";
import disneyLogo from "../../assets/disney_logo_march_2024.png";
import LoginBtn from "../Login/LoginBtn";
import { useRecoilValue } from "recoil";
import { isLoggedInState, userInfoState } from "../../atoms/auth";
import Profile from "../common/Profile";
function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const userInfo = useRecoilValue(userInfoState);

  return (
    <>
      <header className="relative left-0 right-0 top-0 flex h-14 justify-between bg-deepBlue px-4 text-xl text-white">
        <h1>
          <img src={disneyLogo} alt="디즈니 플러스 로고" className="h-full" />
        </h1>
        {isLoggedIn ? <Profile src={userInfo.picture} /> : <LoginBtn />}
      </header>
    </>
  );
}

export default Header;
