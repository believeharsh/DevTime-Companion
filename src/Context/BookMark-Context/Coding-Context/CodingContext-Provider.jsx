import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useContext } from "react";
import { addNewBM, deleteBM, editBM } from "../../../Utils/BookMarkUtils";
import {CodingContext} from "./CodingContext"

const InitialBM = [
  {
    id: uuidv4(),
    text: "Vercel",
    url: "https://vercel.com/harsh-dahiya-s-projects",
  },
  { id: uuidv4(), text: "Github", url: "https://github.com/believeharsh/" },
  { id: uuidv4(), text: "Linkedin", url: "https://www.linkedin.com/feed/" },
  { id: uuidv4(), text: "Youtube", url: "https://www.youtube.com/" },
];

const LOCAL_STORAGE_KEY = "CodingBM";

const CodingContextProvider = ({ children }) => {
  const [BookMark, setBookMark] = useState(() => {
    try {
      const SavedBMs = localStorage.getItem(LOCAL_STORAGE_KEY);
      return SavedBMs ? JSON.parse(SavedBMs) : InitialBM;
    } catch (e) {
      console.error("Failed to parse Bookmarks from localStorage", e);
      return InitialBM;
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(BookMark));
  }, [BookMark]);


  const handleAddBM = (newBM) => {
    const newBMArray = addNewBM(BookMark, newBM) ; 
    setBookMark(newBMArray) ; 
  }

  const handleDeleteBM = (BMId) => {
    const filteredBM = deleteBM(BookMark, BMId);
    setBookMark(filteredBM);
  };

  const handleEditBM = (BmId, editedText, editedUrl) => {
    const EditedBM = editBM(BookMark, BmId, {
      id : BmId, 
      text : editedText,
      url : editedUrl

    });
    setBookMark(EditedBM);
  };

  return (
    <CodingContext.Provider value={{ BookMark, handleAddBM, handleEditBM, handleDeleteBM }}>
    {children}
  </CodingContext.Provider>
  );
};

export default CodingContextProvider ; 

export const UseCodingBM = () => {
  const { handleAddBM, handleEditBM, handleDeleteBM, BookMark} = useContext(CodingContext);
  return { handleAddBM, handleEditBM, handleDeleteBM, BookMark };
};