import React from "react";
import AddnewBM from "../Common-Components/AddnewBM";
import Bmlist from "./BmList";
import '../Common-Components/Bookmarks.css'; 
import { UseToolsBM } from "../../../Context/BookMark-Context/Tools-Context/ToolsContext-Provider";

const ToolsBMs = () => {
  const { handleAddBM, handleDeleteBM, handleEditBM, BookMark } = UseToolsBM();
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

export default ToolsBMs ; 