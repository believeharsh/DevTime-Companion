import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AddNewTask from "../Tasks/AddNewTask";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useTodayTask } from "../../../Context/Todo-Context/TodayTasks/TodayTaskProvider";
import { useMissingTask } from "../../../Context/Todo-Context/MissingTasks/MissingTaskProvider";
import { useImpTask } from "../../../Context/Todo-Context/ImportantTasks/ImpTaskProvider";

const GetTasks = () => {
  const { handleAddTask: handleAddTodayTask } = useTodayTask();
  const { handleAddTask: handleAddImportantTask } = useImpTask();
  const { handleAddTask: handleAddMissingTask } = useMissingTask();

  const getAddTaskFunction = (route) => {
    switch (route) {
      case "important":
        return handleAddImportantTask;
      case "missing":
        return handleAddMissingTask;
      case "today":
      default:
        return handleAddTodayTask;
    }
  };

  return (
    <div className="left-0 right-0 bottom-0 top-0 overflow-auto">
      <Navbar />
      <div className="max-w-md mx-auto p-4">
        <div className="everything-card border-1 rounded-xl px-2 py-2">
          <Header />
          {/* AddNewTask component should still be rendered at the top */}
          <AddNewTask handleAddTask={getAddTaskFunction("today")} />
          {/* This will render the nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GetTasks;