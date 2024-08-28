import React, { useState, useRef, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useBM } from "../../Context/BookMark-Context/BMContext-Provider";
import CommonBM from "./CommonBM";

const Bmlist = () => {
  const [BmId, setBmId] = useState(null);
  const [editedBMtext, seteditedBMtext] = useState("");
  const [panelOpenId, setPanelOpenId] = useState(null);
  const { handleEditBM, handleDeleteBM, BookMark } = useBM();
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleEditInputChange = (e) => {
    seteditedBMtext(e.target.value);
  };

  const handleEditSubmit = (BmId) => {
    if (editedBMtext !== "") {
      handleEditBM(BmId, editedBMtext);
      setBmId(null);
      seteditedBMtext("");
    } else {
      alert("BM can't be empty");
    }
  };

  const handleKeyPress = (e, BmId) => {
    if (e.key === "Enter") {
      handleEditSubmit(BmId);
    }
  };

  const togglePanel = (BmId) => {
    setPanelOpenId(panelOpenId === BmId ? null : BmId);
  };

  const openEditPanel = (BmId) => {
    setBmId(BmId);
    const BMToEdit = BookMark.find((BM) => BM.id === BmId);
    seteditedBMtext(BMToEdit.text);
  };

  const handleClickOutside = (e) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setPanelOpenId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 m-2 mt-5">
      {BookMark.map((BM) => {
        const isEditing = BM.id === BmId;
        const isPanelOpen = panelOpenId === BM.id;

        return (
          <div key={BM.id} className="">
           
              <div className="relative flex items-center hover:border-gray-50 hover:border-[0.3px] py-2 hover:rounded-xl justify-center px-4 ">
                {!isEditing ? (
                  <>
                  <div className=" flex justify-center items-center">
                  <CommonBM BM={BM} />
                  </div>
                  
                    <button
                      className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none px-1 py-1"
                      onClick={() => togglePanel(BM.id)}
                      ref={buttonRef}
                    >
                      <BsThreeDotsVertical />
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    value={editedBMtext}
                    onChange={handleEditInputChange}
                    onKeyDown={(event) => handleKeyPress(event, BM.id)}
                    className="BM-input px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                  />
                )}
              </div>
            

            <div className="relative">
              {isPanelOpen && (
                <div
                  ref={panelRef}
                  className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded-md shadow-lg py-2 z-20"
                >
                  <button
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-700"
                    onClick={() => openEditPanel(BM.id)}
                  >
                    <CiEdit className="inline-block mr-2" /> Edit
                  </button>
                  <button
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-700"
                    onClick={() => handleDeleteBM(BM.id)}
                  >
                    <MdDeleteOutline className="inline-block mr-2" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bmlist;
