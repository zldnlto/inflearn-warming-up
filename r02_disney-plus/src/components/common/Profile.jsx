import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import Button from "./Button";
import { isLoggedInState } from "../../atoms/auth";

function Profile({ src }) {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOutBtn = () => {
    console.log("logut");
    console.log(localStorage.getItem("USER_INFO"));
    localStorage.removeItem("USER_INFO");
    setIsLoggedIn(false);
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-10 w-10 cursor-pointer"
      >
        <img src={src} alt="유저 프로필 이미지" className="rounded-full" />
        <div className="relative z-50 -ml-16 bg-transparent py-2">
          {isHovered && <Button onClick={handleLogOutBtn}>LOGOUT</Button>}
        </div>
      </div>
    </>
  );
}

export default Profile;
