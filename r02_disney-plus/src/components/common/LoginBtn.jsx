import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { isLoggedInState, userInfoState } from "../../atoms/auth";
import Button from "./Button";

const LoginBtn = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);

  const googleSocialLogin = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const userInfoRes = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          }
        );
        const userInfo = userInfoRes.data;
        console.log(userInfo);

        localStorage.setItem("USER_INFO", JSON.stringify(userInfo));

        setIsLoggedIn(true);
        setUserInfo(userInfo);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  return <Button onClick={googleSocialLogin}>LOGIN</Button>;
};

export default LoginBtn;
