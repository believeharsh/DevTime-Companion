import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const AppContainer = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="ml-[15%] flex flex-col w-[85%] h-full">
        <Header />

        {/* Main Section */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
