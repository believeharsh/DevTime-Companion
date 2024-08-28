// Combined Context Provider
import TodayTaskProvider from "../Todo-Context/TodayTasks/TodayTaskProvider";
import MissingTaskProvider from "../Todo-Context/MissingTasks/MissingTaskProvider";
import ImpTaskProvider from "../Todo-Context/ImportantTasks/ImpTaskProvider";
import BMContextProvider from "../BookMark-Context/BMContext-Provider";

const TasksContextProvider = ({ children }) => {
  return (
    <TodayTaskProvider>
      <MissingTaskProvider>
        <ImpTaskProvider>{children}</ImpTaskProvider>
      </MissingTaskProvider>
    </TodayTaskProvider>
  );
};

const MainContextProvider = ({ children }) => {
  return (
    <TasksContextProvider>
      <BMContextProvider>
        {children}
      </BMContextProvider>
    </TasksContextProvider>
  );
};

export default MainContextProvider;