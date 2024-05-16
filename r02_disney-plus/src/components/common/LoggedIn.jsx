import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../../atoms/auth";

function LoggedIn({ children }) {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      console.log("로그인되어 있지 않음, 로그인 페이지로 이동.");
      setIsLoggedIn(false);
      navigate("/login");
      return;
    } else {
      setIsLoggedIn(true);
      navigate("/");
    }
  }, [setIsLoggedIn]);
  return <>{children}</>;
}

export default LoggedIn;
