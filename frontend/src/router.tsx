import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import Loader from "./components/Loader";
import SidebarLayout from "./layouts";

const LoaderSuspense = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const Login = LoaderSuspense(lazy(() => import("./pages/Login")));

const Campaigns = LoaderSuspense(lazy(() => import("./applications/campaign")));

const Status404 = LoaderSuspense(lazy(() => import("./pages/Status404")));

const routes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="campaigns" replace />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "*",
    element: <Status404 />,
  },
];

export default routes;
