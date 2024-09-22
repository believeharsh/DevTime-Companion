import React from "react";
import ToDo from "./ToDo";
import BookMark from "./BookMark";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="fixed bg-neutral-800 top-0 left-0 bottom-0 w-[15%] text-white p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center">
          <img
            src="/public/Images/Fevicon.png"
            alt="Profile Image"
            className="rounded-full w-24 h-24"
          />
          <h1 className="mt-4 text-lg font-bold">UserName</h1>
          <h2 className="text-sm">Harsh Dahiya</h2>
        </div>
        <ul className="space-y-2 text-center">
          <li className="hover:bg-gray-700 px-6 py-2 rounded">Dashboard</li>
          <li className="hover:bg-gray-700 px-6 py-2 rounded">To-Do List</li>
          <li className="hover:bg-gray-700 px-6 py-2 rounded">Bookmarks</li>
          <li className="hover:bg-gray-700 px-6 py-2 rounded">Settings</li>
        </ul>
        <div className="text-center">
          <h4 className="text-xs">@conserved2024</h4>
        </div>
      </div>
    </div>
  );
};

// Right Content - Header Component
const Header = () => {
  return (
    <div className="w-full bg-neutral-900 text-white py-1 px-4 text-right font-bold">
      <h1 className="text-2xl font-bold">DevTime Companion DashBoard</h1>
    </div>
  );
};

// Right Content - Main Section
const MainSection = () => {
  return (
    <div className="flex h-full space-x-2">
      {/* Left Side - 60% */}
      <div className="w-[55%] flex flex-col space-y-2">
        <div className="bg-neutral-800 w-full h-[40%] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">First child </h3>
        </div>
        <div className="bg-neutral-800 w-full h-[60%] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Second Child</h3>
        </div>
      </div>

      {/* Right Side - 40% */}
      <div className="w-[45%] flex space-x-2 justify-between h-full">
        <div className="bg-neutral-800 w-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">ToDo List </h3>
          <ToDo/>
        </div>
        <div className="bg-neutral-800 w-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">BookMarks </h3>
          <BookMark/>
        </div>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="ml-[15%] flex flex-col w-[85%] h-full">
        {/* Header */}
        <Header />

        {/* Main Section */}
        <div className="flex-1 p-4">
          <MainSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
