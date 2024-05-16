import React from "react";

function Header() {
  return (
    <>
      <header className="relative left-0 right-0 top-0 flex justify-between bg-slate-200">
        <h1>디즈니플러스로고</h1>
        {/* 로그인 상태일경우 프로필, 아니면 Login버튼  */}
        <div>로그인정보</div>
      </header>
    </>
  );
}

export default Header;
