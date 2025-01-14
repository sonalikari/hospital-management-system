import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/patients', label: 'Patients' },
    { path: '/diet-charts', label: 'Diet Charts' },
    { path: '/pantry', label: 'Pantry' },
    { path: '/deliveries', label: 'Deliveries' },
  ];

  return (
    <>
      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-600 to-blue-800 text-white z-50 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static`}
      >
        {/* Close Button (Mobile Only) */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <h1 className="text-xl font-bold">Hospital Manager</h1>
          <button onClick={toggleSidebar}>
            <FiX className="text-2xl text-white" />
          </button>
        </div>

        {/* Avatar Section */}
        <div className="flex items-center gap-4 p-4">
          <img
            src="https://png.pngtree.com/png-vector/20240612/ourmid/pngtree-lady-doctor-image-png-image_12725825.png"
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="text-lg font-semibold">Sonali</h3>
            <p className="text-sm text-blue-300">Hospital Manager</p>
          </div>
        </div>

        {/* Menu Section */}
        <ul className="space-y-4 p-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block py-3 px-4 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-blue-900 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
                onClick={() => toggleSidebar(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
