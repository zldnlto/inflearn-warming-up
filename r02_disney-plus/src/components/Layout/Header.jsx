import React from "react";
import disneyLogo from "../../assets/disney_logo_march_2024.png";
import LoginBtn from "../Login/LoginBtn";

function Header() {
  return (
    <>
      <header className="bg-deepBlue relative left-0 right-0 top-0 flex h-14 justify-between px-4 text-xl text-white">
        <h1>
          <img src={disneyLogo} alt="디즈니 플러스 로고" className="h-full" />
        </h1>
        <LoginBtn />
      </header>
    </>
  );
}

export default Header;
