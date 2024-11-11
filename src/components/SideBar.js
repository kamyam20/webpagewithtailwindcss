// Sidebar.js
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import RegistrationForm from "./RegistrationForm";
import Create from "./Create";
import Edit from "./Edit";
import ChartComponent from "./ChartComponent";
import ViewPage from "./ViewPage";
import ViewDetails from "./ViewDetails";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Header */}
      <header className="w-full fixed top-0 bg-blue-600 text-white p-4 z-10">
        <h1 className="text-center text-2xl font-bold">My App HeaderKamya</h1>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 top-16 transform bg-blue-800 text-white w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            ✕
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 mt-12">
          <Link to="/" className="hover:bg-blue-700 p-2 rounded">
            Home
          </Link>
          <Link to="/create" className="hover:bg-blue-700 p-2 rounded">
          Create
          </Link>
          <Link to="/edit" className="hover:bg-blue-700 p-2 rounded">
          Edit
          </Link>
          <Link to="/view" className="hover:bg-blue-700 p-2 rounded">
            View
          </Link>
          
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen pt-16 lg:ml-64">
        <header className="p-4 bg-blue-600 text-white flex items-center justify-between lg:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            ☰
          </button>
          <h1 className="text-xl font-bold">My App</h1>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            {/* Add other routes here as needed */}
            <Route path="/" element={<ChartComponent/>} />
            <Route path="/view" element={<ViewPage/>} />
            <Route path="/viewDetails" element={<ViewDetails/>} />

          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
