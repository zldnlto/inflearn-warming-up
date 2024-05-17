import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

import LoggedIn from "./components/common/LoggedIn";
import Header from "./components/layout/Header";
import { isLoggedInState } from "./atoms/auth";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  //레이아웃이 여기
  //Login 구분 여기
  return (
    <>
      <LoggedIn>
        <Header />
        {isLoggedIn ? <Outlet /> : <Login />}
      </LoggedIn>
    </>
  );
}

export default App;
