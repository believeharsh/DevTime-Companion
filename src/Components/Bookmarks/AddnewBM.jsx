import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";
import { v4 as uuidv4 } from "uuid";

const AddnewBM = () => {
  const { handleAddBM, BookMark } = useBM();
  const [bookmarkText, setBookmarkText] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBM(BookMark, { id: uuidv4(), text: bookmarkText, url: bookmarkUrl,  });
    setBookmarkText("");
    setBookmarkUrl("");
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      {/* First Div: Bookmark Text */}
      <div className="flex-1">
        <input
          type="text"
          value={bookmarkText}
          onChange={(e) => setBookmarkText(e.target.value)}
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-900 text-white"
        />
      </div>
      
      {/* Second Div: Bookmark URL */}
      <div className="flex-1">
        <input
          type="url"
          value={bookmarkUrl}
          onChange={(e) => setBookmarkUrl(e.target.value)}
          placeholder="URL"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
        />
      </div>
      
      {/* Third Div: Add Button */}
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>
    </form>
    </>
  );
};

export default AddnewBM;
