import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContextProvider from "./Context/MainContext/Maincontext";
import { Suspense, lazy, useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "./Components/General/Spinner";

// Lazy-loaded components
const GetTasks = lazy(() => import("./Components/TodoPages/AllTasks/GetTasks"));
const AllBs = lazy(() => import("./Components/Bookmarks/AllBMs"));
const TodayTasklist = lazy(() =>
  import("./Components/TodoPages/Tasks/TodayTasklist")
);
const MissingTasklist = lazy(() =>
  import("./Components/TodoPages/Tasks/Missingtask")
);
const ImpTasklist = lazy(() =>
  import("./Components/TodoPages/Tasks/ImportantTasks")
);
const Watch = lazy(() => import("./Components/DigitalWatch/Watch"));
const Reminder = lazy(() => import("./Components/Reminders/Remider"));
const Settings = lazy(() => import("./Components/Settings/Settings"));

// Eagerly loaded
import AppContainer from "./Components/Pages/AppContainer/AppContainer";
import DashBoard from "./Components/Pages/DashBoard/Dashboard";
import Login from "./Components/Login-Signup/Login";
import Signup from "./Components/Login-Signup/Signup";

function App() {
  function RequireAuth({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  return (
    <Router>
      <MainContextProvider>
        <Suspense fallback={<Spinner />}>
          {" "}
          <Routes>
            {/* Home route with nested routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/"
              element={
                <RequireAuth>
                  <AppContainer />
                </RequireAuth>
              }
            >
              {/* Protected routes */}
              <Route index element={<DashBoard />} /> {/* Eagerly loaded */}
              <Route path="tasks" element={<GetTasks />}>
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
        </Suspense>
      </MainContextProvider>
    </Router>
  );
}

export default App;
