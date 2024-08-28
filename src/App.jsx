// import GetTasks from "./Components/TodoPages/AllTasks/GetTasks"
import { BrowserRouter as Router } from "react-router-dom";
import TodayTaskProvider from "./Context/Todo-Context/TodayTasks/TodayTaskProvider";
import MissingTaskProvider from "./Context/Todo-Context/MissingTasks/MissingTaskProvider";
import ImpTaskProvider from "./Context/Todo-Context/ImportantTasks/ImpTaskProvider";
// import Navbar from "./Components/Navbar/Navbar";
import BMContextProvider from "./Context/BookMark-Context/BMContext-Provider";
import AllBMs from "./Components/Bookmarks/AllBMs";
import CommonBM from "./Components/Bookmarks/CommonBM";

function App() {


  return (
    <>
  {/* <Router>
      <TodayTaskProvider>
        <MissingTaskProvider>
          <ImpTaskProvider>
            <Navbar/>
            
          </ImpTaskProvider>
        </MissingTaskProvider>
      </TodayTaskProvider>
    </Router> */}

    
  <Router>
      <BMContextProvider>
        
           <AllBMs/>
            
          
      </BMContextProvider>
    </Router>
    </>
  )
}


export default App
