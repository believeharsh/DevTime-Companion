import React from "react";
import Bmlist from "./BmList";
import "../Common-Components/Bookmarks.css";
import { UseSocialBM } from "../../../Context/BookMark-Context/Social-Context/SocialContext-Provider";

const SocialBM = () => {
  const { handleAddBM, handleDeleteBM, handleEditBM, BookMark } = UseSocialBM();
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

export default SocialBM;
