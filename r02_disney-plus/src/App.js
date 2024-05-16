import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";

function App() {
  //레이아웃이 여기
  //Login 구분 여기
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
