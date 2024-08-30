import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";
import { v4 as uuidv4 } from "uuid";

const AddnewBM = () => {
  const {handleAddBM, BookMark } = useBM();
  const [bookmarkText, setBookmarkText] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBM(BookMark, {
      id: uuidv4(),
      text: bookmarkText,
      url: bookmarkUrl,
    });
     
    setBookmarkText("");
    setBookmarkUrl("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        {/* First Child: Input Fields */}
        <div className="flex-1 flex space-x-2" style={{ width: "90%" }}>
          {/* Bookmark Text (25% width) */}
          <div className="w-1/4">
            <input
              type="text"
              value={bookmarkText}
              onChange={(e) => setBookmarkText(e.target.value)}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
            />
          </div>

          {/* Bookmark URL (75% width) */}
          <div className="flex-1">
            <input
              type="url"
              value={bookmarkUrl}
              onChange={(e) => setBookmarkUrl(e.target.value)}
              placeholder="URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
            />
          </div>
        </div>

        {/* Second Child: Add Button (10% width) */}
        <div className="flex-shrink-0" style={{ width: "10%" }}>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 flex items-center justify-center text-2xl"
          >
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddnewBM;
