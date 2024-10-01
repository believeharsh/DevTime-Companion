import React, { useState, useEffect } from "react";
import './Bookmarks.css'; // Import the CSS file

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
    <div className="editBM-container">
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="editBM-label">Text:</label>
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            className="editBM-input"
          />
        </div>
        <div className="mb-2">
          <label className="editBM-label">URL:</label>
          <input
            type="text"
            value={editedUrl}
            onChange={handleUrlChange}
            className="editBM-input"
          />
        </div>
        <div className="editBM-buttons">
          <button
            type="submit"
            className="editBM-button editBM-save"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => handleDeleteBM(BM.id)}
            className="editBM-button editBM-delete"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={closeEditPanel}
            className="editBM-button editBM-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookmark;
