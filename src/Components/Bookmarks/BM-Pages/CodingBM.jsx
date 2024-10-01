import React from "react";
import Bmlist from "./BmList";
import '../Common-Components/Bookmarks.css'; 
import { UseCodingBM } from "../../../Context/BookMark-Context/Coding-Context/CodingContext-Provider";

const CodingBMs = () => {
  const { handleAddBM, handleDeleteBM, handleEditBM, BookMark } = UseCodingBM();
  return (
    <div className="">
    <div>
      <Bmlist
        handleAddBM={handleAddBM}
        BookMark={BookMark}
        handleDeleteBM={handleDeleteBM}
        handleEditBM={handleEditBM}
      />
    </div>
  </div>
  );
};

export default CodingBMs ; 