import React from "react";
import { Link } from "react-router-dom";
import './Bookmarks.css'; // Import the CSS file
import Header from "../../Pages/Header/Header";

const  Navigation = () => {
  return (
    <>
      <div className="px-8 py-1 font-libre text-white border-b-[1px] border-white">
        <div className="flex justify-between item-center text-xl">
          <div className="text-2xl  px-3 py-1 rounded-xl">
            <Header/>
          </div>
          <div className="Navbar-btns-div">
            <Link className="navbar-buttons" to='socialbm'>
              Social
            </Link>
            <Link className="navbar-buttons" to='codingbm'>
              Coding
            </Link>
            <Link className="navbar-buttons" to='toolsbm'>
              Tools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;