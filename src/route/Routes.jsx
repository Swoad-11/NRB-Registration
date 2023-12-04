import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage/LandingPage";
import Info from "./../pages/Info/Info";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/info", element: <Info /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
