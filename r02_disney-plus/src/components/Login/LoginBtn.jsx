import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginBtn = () => {
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
      <button onClick={googleSocialLogin}>Google Login</button>
    </div>
  );
};

export default LoginBtn;
