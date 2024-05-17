import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Profile({ src }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleLogOutBtn = () => {
    console.log("logut");
    localStorage.removeItem("USER_INFO");
    navigate("/login");
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-10 w-10 cursor-pointer"
      >
        <img src={src} alt="유저 프로필 이미지" className="rounded-full" />
        <div className="-ml-16 bg-transparent py-2">
          {isHovered && <Button onClick={handleLogOutBtn}>LOGOUT</Button>}
        </div>
      </div>
    </>
  );
}

export default Profile;
