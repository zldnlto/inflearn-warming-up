import React from "react";
import LoginBtn from "../../components/Login/LoginBtn";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <section className="flex w-2/3 flex-col items-center gap-3">
        <h2>로고들로고들로고들</h2>
        <button
          type="button"
          className="bg-lightBlue w-full rounded p-3 text-white"
        >
          지금 가입
        </button>
        <p>안내문구</p>
      </section>
    </div>
  );
}

export default Login;
