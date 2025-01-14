import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PantryStaffFormModal from '../components/PantryForm';

function InnerPantry({ isSidebarOpen, toggleSidebar }) {
  const [pantryStaff, setPantryStaff] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [staffToEdit, setStaffToEdit] = useState(null); // For editing staff

  const addPantryStaff = (staff) => {
    setPantryStaff([...pantryStaff, staff]);
  };

  const deleteStaff = (index) => {
    setPantryStaff(pantryStaff.filter((_, i) => i !== index));
  };

  const openEditModal = (staff) => {
    setStaffToEdit(staff);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Inner Pantry Management</h1>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:opacity-90"
            >
              + Add Pantry Staff
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {pantryStaff.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Contact Info</th>
                    <th className="py-2 px-4">Location</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pantryStaff.map((staff, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{staff.name}</td>
                      <td className="py-2 px-4">{staff.contactInfo}</td>
                      <td className="py-2 px-4">{staff.location}</td>
                      <td className="py-2 px-4">
                        {/* Edit and Delete Icons */}
                        <button
                          onClick={() => openEditModal(staff)}
                          className="text-blue-600 hover:text-blue-800 mr-4"
                        >
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => deleteStaff(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTrashAlt className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No pantry staff added yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal for adding or editing pantry staff */}
      {isModalOpen && (
        <PantryStaffFormModal
          onClose={() => setModalOpen(false)}
          onAdd={addPantryStaff}
          staff={staffToEdit} // Passing the staff to edit (if any)
        />
      )}
    </div>
  );
}

export default InnerPantry;
