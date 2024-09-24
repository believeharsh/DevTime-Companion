import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContextProvider from "./Context/MainContext/Maincontext";
import GetTasks from "./Components/TodoPages/AllTasks/GetTasks";
import AllBs from "./Components/Bookmarks/AllBMs";
import TodayTasklist from "./Components/TodoPages/Tasks/TodayTasklist";
import MissingTasklist from "./Components/TodoPages/Tasks/Missingtask";
import ImpTasklist from "./Components/TodoPages/Tasks/ImportantTasks";
import Watch from "./Components/DigitalWatch/Watch";
import Reminder from "./Components/Reminders/Remider";
import AppContainer from "./Components/Pages/AppContainer/AppContainer";
import DashBoard from "./Components/Pages/DashBoard/Dashboard";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <>
      <Router>
        <MainContextProvider>
          <Routes>
            {/* Home route with nested routes */}
            <Route path="/" element={<AppContainer/>}>
              {/* When the user navigates to '/', render the Homepage component */}
              <Route index element={<DashBoard/>} />

              {/* Render nested routes like tasks and bookmarks */}
              <Route path="tasks" element={<GetTasks/>}>
                
                <Route path="today" element={<TodayTasklist />} />
                <Route path="important" element={<ImpTasklist />} />
                <Route path="missing" element={<MissingTasklist />} />
              </Route>
              <Route path="bookmarks" element={<AllBs />} />
              <Route path="reminder" element={<Reminder />} />
              <Route path="watch" element={<Watch />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Fallback route */}
            {/* <Route path="*" element={<Homepage />} /> */}
          </Routes>
        </MainContextProvider>
      </Router>
    </>
  );
}

export default App;





