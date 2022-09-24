import React, { lazy } from "react";
import * as ROUTE from "./routesConstant";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import PrivateLayout from "../components/Layout/PrivateLayout";
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Pagenotfound = lazy(() => import("../pages/PageNotFound/PageNotFound"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

const Router = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default Router;
