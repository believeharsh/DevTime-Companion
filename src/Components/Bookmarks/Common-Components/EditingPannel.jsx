import React, { useEffect } from "react";

const EditingPannel = ({
  panelRef,
  openEditPanel,
  handleDeleteBM,
  BM,
  handleClickOutside,
}) => {

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={panelRef}
      className="editing-panel-container"
    >
      <button
        className="editing-panel-button"
        onClick={() => openEditPanel(BM.id)}
      >
        Edit
      </button>
      <button
        className="editing-panel-button"
        onClick={() => handleDeleteBM(BM.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditingPannel;
