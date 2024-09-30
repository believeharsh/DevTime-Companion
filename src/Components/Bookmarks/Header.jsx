import React from "react";
import { Link } from "react-router-dom";
import './Bookmarks.css'; // Import the CSS file

function Header() {
  return (
    <>
      <div className="px-8 py-1 font-libre text-white ">
        <div className="flex justify-between item-center text-xl">
          <div className="text-2xl  px-3 py-1 rounded-xl">
            <p>BookMarks.In</p>
          </div>
          <div className="flex justify-center items-center space-x-5 text-xl ">
            <Link className="Navbar-BTN" to='social'>
              Social
            </Link>
            <Link className="Navbar-BTN" to='coding'>
              Coding
            </Link>
            <Link className="Navbar-BTN" to='tools'>
              Tools
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;