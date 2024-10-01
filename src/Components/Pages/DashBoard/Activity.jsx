import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Activity = () => {
  // Data for Task Completion (percentage)
  const taskData = {
    labels: ["Completed", "Incomplete"],
    datasets: [
      {
        label: "Task Completion",
        data: [85, 15], // Example: 85% completed, 15% incomplete
        backgroundColor: ["#4f46e5", "#e5e7eb"], // Indigo for completed, gray for incomplete
        hoverOffset: 4,
      },
    ],
  };

  // Data for App Usage (percentage of days app was used out of total days)
  const usageData = {
    labels: ["Used", "Not Used"],
    datasets: [
      {
        label: "App Usage",
        data: [70, 30], // Example: 70% used, 30% not used
        backgroundColor: ["#34d399", "#e5e7eb"], // Green for used, gray for not used
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-xl font-bold mb-2 text-center">User Activity Tracker</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold text-center mb-2">
            Task Completion
          </h2>
          <div className=" shadow-2xl rounded-full w-52 h-52 flex items-center justify-center">
            <Doughnut data={taskData} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold text-center mb-2">
            App Usage
          </h2>
          <div className=" shadow-2xl rounded-full w-52 h-52 flex items-center justify-center">
            <Doughnut data={usageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
