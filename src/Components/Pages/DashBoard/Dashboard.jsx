import React from "react";
import ToDo from "./ToDo";
import BookMark from "./Bookmarks";

const DashBoard = () => {
  return (
    <div className="flex h-full space-x-2">
      {/* Left Side - 60% */}
      <div className="w-[55%] flex flex-col space-y-2">
        <div className="bg-neutral-800 w-full h-[40%] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">First child </h3>
        </div>
        <div className="bg-neutral-800 w-full h-[60%] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Second Child</h3>
        </div>
      </div>

      {/* Right Side - 40% */}
      <div className="w-[45%] flex space-x-2 justify-between h-full">
        <div className="bg-neutral-800 w-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">ToDo List </h3>
          <ToDo />
        </div>
        <div className="bg-neutral-800 w-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">BookMarks </h3>
          <BookMark />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
