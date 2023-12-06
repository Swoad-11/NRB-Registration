import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage/LandingPage";
import Info from "./../pages/Info/Info";
import Sidebar from "../pages/Sidebar/Sidebar";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/info", element: <Info /> },
      { path: "/profile", element: <Sidebar /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
