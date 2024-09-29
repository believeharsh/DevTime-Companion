import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;