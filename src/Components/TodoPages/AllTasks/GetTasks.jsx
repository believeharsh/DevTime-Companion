import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AddNewTask from "../Tasks/AddNewTask";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useTodayTask } from "../../../Context/Todo-Context/TodayTasks/TodayTaskProvider";
import { useMissingTask } from "../../../Context/Todo-Context/MissingTasks/MissingTaskProvider";
import { useImpTask } from "../../../Context/Todo-Context/ImportantTasks/ImpTaskProvider";


const GetTasks = () => {
  const location = useLocation();
  const { handleAddTask: handleAddTodayTask } = useTodayTask();
  const { handleAddTask: handleAddImportantTask } = useImpTask();
  const { handleAddTask: handleAddMissingTask } = useMissingTask();

  const path = location.pathname.split("/").pop();
  const getAddTaskFunction = () => {
    switch (path) {
      case "important":
        return handleAddImportantTask;
      case "missing":
        return handleAddMissingTask;
      case "today":
      default:
        return handleAddTodayTask;
    }
  };

  if (location.pathname === "/tasks") {
    return <Navigate to="/tasks/today" />;
  }

  return (
    <div className="left-0 right-0 bottom-0 top-0 overflow-auto">
      <Navbar />
      <div className="max-w-md mx-auto p-4">
        <div className="everything-card border-1 rounded-xl px-2 py-2">
          <Header />

          <AddNewTask handleAddTask={getAddTaskFunction()} />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GetTasks;
