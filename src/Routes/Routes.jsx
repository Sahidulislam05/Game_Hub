import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Games from "../Pages/Games/Games";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import GameDetails from "../Components/GameDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateProfile from "../Components/UpdateProfile";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import Loading from "../Pages/Loading";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/GamesData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/games",
        Component: Games,
      },
      {
        path: "/games-details/:id",
        element: (
          <PrivateRoutes>
            <GameDetails></GameDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        Component: UpdateProfile,
      },
    ],
  },
]);

export default router;
