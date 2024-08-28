import { BrowserRouter as Router } from "react-router-dom";
import MainContextProvider from "./Context/MainContext/Maincontext";
import GetTasks from "./Components/TodoPages/AllTasks/GetTasks";
import AllBs from "./Components/Bookmarks/AllBMs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    
      
        <Router>
        <Navbar />
        <div className="flex justify-center items-center px-5 pt-5">
          <MainContextProvider>
            <GetTasks />
            <AllBs />
          </MainContextProvider>
          </div>
        </Router>
      
    </>
  );
}

export default App;