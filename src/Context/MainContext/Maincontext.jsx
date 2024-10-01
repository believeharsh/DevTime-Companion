// Combined Context Provider
import TodayTaskProvider from "../Todo-Context/TodayTasks/TodayTaskProvider";
import MissingTaskProvider from "../Todo-Context/MissingTasks/MissingTaskProvider";
import ImpTaskProvider from "../Todo-Context/ImportantTasks/ImpTaskProvider";
import CodingContextProvider from "../BookMark-Context/Coding-Context/CodingContext-Provider";
import SocialContextProvider from "../BookMark-Context/Social-Context/SocialContext-Provider";
import ToolsContextProvider from "../BookMark-Context/Tools-Context/ToolsContext-Provider";

const TasksContextProvider = ({ children }) => {
  return (
    <TodayTaskProvider>
      <MissingTaskProvider>
        <ImpTaskProvider>{children}</ImpTaskProvider>
      </MissingTaskProvider>
    </TodayTaskProvider>
  );
};

const BMContextProvider = ({children}) => {
  return (
    <CodingContextProvider>
      <SocialContextProvider>
         <ToolsContextProvider>{children}</ToolsContextProvider>
      </SocialContextProvider>
    </CodingContextProvider>
  )
}



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