import React from "react";
import { useEffect } from "react";
const EditingPannel = ({
    panelRef,
  openEditPanel,
  handleDeleteBM,
  BM,
  handleClickOutside,
}) => {
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={panelRef}
        className="absolute top-2 mx-auto ml-1 mt-1 w-20 bg-gray-800 text-white rounded-md shadow-lg py-3 z-20"
      >
        <button
          className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-700"
          onClick={() => openEditPanel(BM.id)}
        >
        Edit
        </button>
        <button
          className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-700"
          onClick={() => handleDeleteBM(BM.id)}
        >
         Delete
        </button>
      </div>
    </>
  );
};

export default EditingPannel;
