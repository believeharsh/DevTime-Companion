import React from "react";
import AddnewBM from "./AddnewBM";
import { UseSocialBM } from "../../../Context/BookMark-Context/Social-Context/SocialContext-Provider";
import { UseToolsBM } from "../../../Context/BookMark-Context/Tools-Context/ToolsContext-Provider";
import "../Common-Components/Bookmarks.css";
import { Outlet } from "react-router-dom";
import { UseCodingBM } from "../../../Context/BookMark-Context/Coding-Context/CodingContext-Provider";
import  Header  from "./Header";
const GetBM = () => {
  const { handleAddBM: handleAddCodingBM } = UseCodingBM();
  const { handleAddBM: handleAddSocialBM } = UseSocialBM();
  const { handleAddBM: handleAddToolsBM } = UseToolsBM();

  const getAddBMFunction = (route) => {
    switch (route) {
      case "coding":
        return handleAddCodingBM;
      case "social":
        return handleAddSocialBM;
      case "tools":
      default:
        return handleAddToolsBM;
    }
  };
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="AllBMs-container">
        <div className="AllBMs-wrapper">
          <div className="everything-card">
            <div className="AllBMs-addnewbm-section">
              <AddnewBM handleAddBM={getAddBMFunction("coding")} />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetBM;
