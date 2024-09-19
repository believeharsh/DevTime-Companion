import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";
import CommonBM from "./CommonBM";
import EditBookmark from "./EditBM";
import EditingPannel from "./EditingPannel";

const Bmlist = () => {
  const [editBM, setEditBM] = useState(null); // Track the bookmark being edited
  const [panelOpenId, setPanelOpenId] = useState(null);
  const { handleEditBM, handleDeleteBM, BookMark } = useBM();

  // Use refs as objects to store multiple button and panel refs
  const panelRef = useRef({});
  const buttonRef = useRef({});

  const togglePanel = (BmId) => {
    setPanelOpenId(panelOpenId === BmId ? null : BmId);
  };

  const openEditPanel = (BmId) => {
    const BMToEdit = BookMark.find((BM) => BM.id === BmId);
    setEditBM(BMToEdit);
    setPanelOpenId(null); // Close the panel when opening the edit form
  };

  const closeEditPanel = () => {
    setEditBM(null); // Close the edit panel by setting editBM to null
  };

  const handleEditSubmit = (BmId, editedText, editedUrl) => {
    handleEditBM(BmId, editedText, editedUrl);
  };

  const handleClickOutside = (e) => {
    const panel = panelRef.current[panelOpenId];
    const button = buttonRef.current[panelOpenId];

    if (
      panel &&
      !panel.contains(e.target) &&
      button &&
      !button.contains(e.target)
    ) {
      setPanelOpenId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [panelOpenId]);

  return (
    <div className="flex flex-wrap gap-4 m-2 mt-5 relative">
      {BookMark.map((BM) => {
        const isEditing = BM.id === editBM?.id;
        const isPanelOpen = panelOpenId === BM.id;

        return (
          <div
            key={BM.id}
            className={`${
              !isEditing
                ? "hover:border-[0.2px] hover:border-gray-100 rounded-xl"
                : ""
            }  group relative`}
          >
            <div className="flex items-center py-2 hover:rounded-xl justify-center px-4">
              {isEditing ? (
                <EditBookmark
                  BM={editBM}
                  handleEditSubmit={handleEditSubmit}
                  handleDeleteBM={handleDeleteBM}
                  closeEditPanel={closeEditPanel}
                />
              ) : (
                <>
                  <div className="flex justify-center items-center">
                    <CommonBM BM={BM} />
                  </div>

                  <button
                    className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none px-1 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onClick={() => togglePanel(BM.id)}
                    ref={(el) => (buttonRef.current[BM.id] = el)}
                  >
                    <BsThreeDotsVertical />
                  </button>
                </>
              )}
            </div>

            <div>
              {isPanelOpen && (
                <EditingPannel
                  BM={BM}
                  panelRef={(el) => (panelRef.current[BM.id] = el)}
                  openEditPanel={openEditPanel}
                  handleDeleteBM={handleDeleteBM}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bmlist;