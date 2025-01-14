import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    // window.location.href = '/login'; 
    navigate('/');
};
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between md:justify-start">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="text-blue-600 text-2xl mr-4 md:hidden focus:outline-none"
      >
        <FiMenu />
      </button>

      {/* Title */}
      <h1 className="text-lg md:text-2xl font-extrabold text-blue-600 truncate">
        Hospital Food Manager
      </h1>

      {/* Logout Button */}
      <div className="hidden md:flex ml-auto">
        <button 
        onClick={handleLogout}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm md:text-base">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
