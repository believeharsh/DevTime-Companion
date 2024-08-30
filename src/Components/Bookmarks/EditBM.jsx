import React, { useState, useEffect } from "react";

const EditBookmark = ({ BM, handleEditSubmit, handleDeleteBM, closeEditPanel }) => {
  const [editedText, setEditedText] = useState(BM.text);
  const [editedUrl, setEditedUrl] = useState(BM.url);

  useEffect(() => {
    setEditedText(BM.text);
    setEditedUrl(BM.url);
  }, [BM]);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleUrlChange = (e) => {
    setEditedUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (editedText.trim() === "" || editedUrl.trim() === "") {
      alert("Both text and URL cannot be empty");
      return;
    }
    handleEditSubmit(BM.id, editedText, editedUrl);
    closeEditPanel(); // Close the edit panel after submitting
  };

  return (
    <div className="p-4 border rounded text-white bg-transparent mx-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-bold mb-1">Text:</label>
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            className="w-full px-2 py-1 border rounded bg-gray-700"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold mb-1">URL:</label>
          <input
            type="text"
            value={editedUrl}
            onChange={handleUrlChange}
            className="w-full px-2 py-1 border rounded bg-gray-700"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => handleDeleteBM(BM.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={closeEditPanel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookmark;