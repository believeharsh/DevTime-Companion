import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContextProvider from "./Context/MainContext/Maincontext";
import GetTasks from "./Components/TodoPages/AllTasks/GetTasks";
import AllBs from "./Components/Bookmarks/AllBMs";
import Homepage from "./Components/Pages/Homepage/Homepage";
import TodayTasklist from "./Components/TodoPages/Tasks/TodayTasklist";
import MissingTasklist from "./Components/TodoPages/Tasks/Missingtask";
import ImpTasklist from "./Components/TodoPages/Tasks/ImportantTasks";
import Watch from "./Components/DigitalWatch/Watch";
import Reminder from "./Components/Reminders/Remider";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <div className="">
          <MainContextProvider>
            <Routes>
              {/* Define your routes here */}
              <Route path="*" element={<Homepage />} />
              <Route path="/bookmarks" element={<AllBs />} />
              <Route path="/reminder" element={<Reminder/>} />
              <Route path="/watch" element={<Watch/>} />
              <Route path="/tasks" element={<GetTasks />}>
                {/* Nested routes */}
                <Route path="today" element={<TodayTasklist />} />
                <Route path="important" element={<ImpTasklist />} />
                <Route path="missing" element={<MissingTasklist />} />
              </Route>
              {/* You can add more routes as needed */}
            </Routes>
          </MainContextProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
