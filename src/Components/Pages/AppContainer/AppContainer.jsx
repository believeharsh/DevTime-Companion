import React from "react";
import { Outlet} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const AppContainer = () => {
 
  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      <Sidebar />

      <div className="ml-[15%] flex flex-col w-[85%] overflow-auto">
    
        <div className="flex-1 p-3">
 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
