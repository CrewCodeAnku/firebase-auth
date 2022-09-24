import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import * as ROUTE from "../../../routes/routesConstant";
import { AuthContext } from "../../../contexts/AuthContext";

const PrivateLayout = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={{ pathname: ROUTE.SIGN_IN }} />;
  }
  return (
    <React.Fragment>
      <main role="main" className="mb-auto mt-5 mb-5">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default PrivateLayout;
