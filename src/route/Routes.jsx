import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage/LandingPage";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
];

export const router = createBrowserRouter(routes);
