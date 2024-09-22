import React from "react";
import AddnewBM from "./AddnewBM";
import Bmlist from "./Bmlist";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";
import './Bookmarks.css'; // Import the CSS file

const AllBs = () => {
  const { handleAddBM, handleDeleteBM, handleEditBM, BookMark } = useBM();
  return (
    <div className="AllBMs-container">
      <div className="AllBMs-wrapper">
        <div className="everything-card">
          <div className="AllBMs-addnewbm-section">
            <AddnewBM />
          </div>
          <div>
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