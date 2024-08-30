export const addNewBM = (BookMark , newBM) => {

  const newBookMark = {
    id: newBM.id,
    text: newBM.text,
    url: newBM.url,
  };
  const newBMArray = [...BookMark, newBookMark];
  return newBMArray ; 
};

  
  export const deleteBM = (BookMark, BMId) => {
    return BookMark.filter((task) => task.id !== BMId);
  };
  
  export const editBM = (BookMark, BMId, newBM) => {
    return BookMark.map((BM) =>
      BM.id === BMId ? { ...BM, id:newBM.id , text: newBM.text, url : newBM.url, } : BM
    );
  };
