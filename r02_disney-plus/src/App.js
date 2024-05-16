import { Outlet } from "react-router-dom";

import LoggedIn from "./components/common/LoggedIn";
import Header from "./components/layout/Header";
Header;

function App() {
  //레이아웃이 여기
  //Login 구분 여기
  return (
    <LoggedIn>
      <Header />
      <main>
        <Outlet />
      </main>
    </LoggedIn>
  );
}

export default App;
