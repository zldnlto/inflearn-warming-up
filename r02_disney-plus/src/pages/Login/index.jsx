import React from "react";
import LoginBtn from "../../components/common/LoginBtn";
import Button from "../../components/common/Button";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <section className="flex w-2/3 flex-col items-center gap-3">
        <h2>로고들로고들로고들</h2>
        <Button size="lg" type="button" className="">
          지금 가입
        </Button>
        <p>안내문구</p>
      </section>
    </div>
  );
}

export default Login;
