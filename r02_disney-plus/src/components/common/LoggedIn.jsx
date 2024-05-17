// LoggedIn.js
import React, { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isLoggedInState, userInfoState } from "../../atoms/auth";

function LoggedIn({ children }) {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);

  useLayoutEffect(() => {
    const userInfo = localStorage.getItem("USER_INFO");
    if (userInfo) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(userInfo));
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, setUserInfo]);

  return <>{children}</>;
}

export default LoggedIn;
