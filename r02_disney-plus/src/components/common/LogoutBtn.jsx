import React from "react";
import Button from "./Button";

function LogoutBtn() {
  const handleLogoutBtn = () => {
    console.log("handleLogoutBtn");
  };

  return <Button onClick={handleLogoutBtn}>LOGOUT</Button>;
}

export default LogoutBtn;
