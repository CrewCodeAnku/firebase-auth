import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/actions/user.actions.types";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div className={`flex justify-center`}>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              Welcome to dashboard
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                You are successfully logged in
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                onClick={() => {
                  dispatch(logout());
                }}
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
