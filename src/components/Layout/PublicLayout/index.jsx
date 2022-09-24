import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout = () => {
  const auth = useContext(AuthContext);
  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="mb-auto mb-5">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
