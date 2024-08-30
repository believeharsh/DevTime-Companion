import React from "react";
import AddnewBM from "./AddnewBM";
import Bmlist from "./Bmlist";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";

const AllBs = () => {
  const { handleAddBM, handleDeleteBM, handleEditBM, BookMark } = useBM();
  return (
    <div className="left-0 right-0 bottom-0 top-0 overflow-auto">
      <div className="max-w-md mx-auto p-4">
        <div className="everything-card border-1 rounded-xl px-2 py-2">
          <div className=" border-white border-b-[0.3px] pb-4">
            <AddnewBM />
          </div>
          <div className="">
          <Bmlist
            handleAddBM={handleAddBM}
            BookMark={BookMark}
            handleDeleteBM={handleDeleteBM}
            handleEditBM={handleEditBM}
          />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AllBs;
