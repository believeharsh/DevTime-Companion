import React, { useState, useEffect } from 'react';
import { useBM } from '../../Context/BookMark-Context/BMContext-Provider';
import { FaPlus } from "react-icons/fa";

const EditBM = ({ BM }) => {
  const { handleEditBM } = useBM();
  const [bookmarkText, setBookmarkText] = useState(BM.text || "");
  const [bookmarkUrl, setBookmarkUrl] = useState(BM.url || "");

  useEffect(() => {
    // Set initial values when BM prop changes
    setBookmarkText(BM.text || "");
    setBookmarkUrl(BM.url || "");
  }, [BM]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBM(BM.id, {
      id: BM.id, // Keep the original ID
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
              value={bookmarkText} // Use state value here
              onChange={(e) => setBookmarkText(e.target.value)} // Update state
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
            />
          </div>

          {/* Bookmark URL (75% width) */}
          <div className="flex-1">
            <input
              type="url"
              value={bookmarkUrl} // Use state value here
              onChange={(e) => setBookmarkUrl(e.target.value)} // Update state
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

export default EditBM;
