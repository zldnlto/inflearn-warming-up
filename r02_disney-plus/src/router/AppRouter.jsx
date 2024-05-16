import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "../constants/path";
import App from "../App";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Main from "../pages/Main";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      elememt: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: PATH.SEARCH,
          element: <Search />,
        },
        {
          path: PATH.LOGIN,
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
