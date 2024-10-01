import React from "react";
import { Link } from "react-router-dom";
import './Bookmarks.css'; // Import the CSS file

const  Header = () => {
  return (
    <>
      <div className="px-8 py-1 font-libre text-white ">
        <div className="flex justify-between item-center text-xl">
          <div className="text-2xl  px-3 py-1 rounded-xl">
            <p>BookMarks.In</p>
          </div>
          <div className="flex justify-center items-center space-x-5 text-xl ">
            <Link className="Navbar-BTN" to='socialbm'>
              Social
            </Link>
            <Link className="Navbar-BTN" to='codingbm'>
              Coding
            </Link>
            <Link className="Navbar-BTN" to='toolsbm'>
              Tools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;