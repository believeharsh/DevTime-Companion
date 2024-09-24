import React from "react";
import { useTodayTask } from "../../../Context/Todo-Context/TodayTasks/TodayTaskProvider";
import { MdDone } from "react-icons/md";

const ToDo = () => {
  const { Tasks } = useTodayTask();

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap text-white">
      {Tasks.map((task) => {
        const IstaskCompleted = task.completed;

        // Correct conditional rendering by returning JSX
        return !IstaskCompleted ? (
          <div
            key={task.id}
            className="flex justify-between p-2 border-[1px] border-white rounded-md w-full"
          >
            <p>{task.text}</p>
            <p className="flex justify-center items-center p-1 border-[1px] border-white rounded-full w-7 h-7 bg-gray-700 hover:border-blue-300 hover:border-[0.6px]">
              <MdDone />
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ToDo;