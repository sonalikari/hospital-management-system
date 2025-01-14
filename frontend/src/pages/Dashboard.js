import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex-1 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Welcome to the Hospital Food Management System</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
