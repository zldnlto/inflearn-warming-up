import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
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

        const profilePicture = userInfoRes.data.picture;
        localStorage.setItem("profilePicture", profilePicture);
        console.log(userInfoRes);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  return (
    <div>
      <button onClick={googleSocialLogin}>Google Btn</button>
      <button onClick={googleSocialLogin}>테스트버튼</button>
    </div>
  );
};

export default Login;
