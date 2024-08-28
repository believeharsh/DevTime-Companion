import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Pages = () => {

 return (
    <>
    
    <div className="">
          <div className="">Navbar will be fixed at the top</div>
        <Routes>
        <Route path="/" element={<TodayTasklist />} /> /* Default Task List */
            <Route path="/important" element={<ImportantTasklist />} />
            <Route path="/today" element={<TodayTasklist />} />
            <Route path="/missing" element={<MissingTasklist />} />
        </Routes>
        
    </div>

  
    

    </>
  
  );
};

export default Pages;
