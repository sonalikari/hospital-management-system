import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';  // Importing Edit and Delete icons
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DeliveryPersonnelFormModal from '../components/DeliveryForm';

function DeliveryPersonnel({ isSidebarOpen, toggleSidebar }) {
  const [deliveryPersonnel, setDeliveryPersonnel] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [personnelToEdit, setPersonnelToEdit] = useState(null);

  const addDeliveryPersonnel = (personnel) => {
    setDeliveryPersonnel([...deliveryPersonnel, personnel]);
  };

  const updateDeliveryPersonnel = (updatedPersonnel) => {
    setDeliveryPersonnel(
      deliveryPersonnel.map((personnel) =>
        personnel._id === updatedPersonnel._id ? updatedPersonnel : personnel
      )
    );
  };

  const deletePersonnel = (index) => {
    setDeliveryPersonnel(deliveryPersonnel.filter((_, i) => i !== index));
  };

  const handleEdit = (personnel) => {
    setPersonnelToEdit(personnel); // Set the personnel data to be edited
    setModalOpen(true); // Open the modal
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Delivery Personnel Management</h1>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:opacity-90"
            >
              + Add Delivery Personnel
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {deliveryPersonnel.length > 0 ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Patient Name</th>
                    <th className="py-2 px-4">Delivery Personnel</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Notes</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryPersonnel.map((personnel, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{personnel.patientName}</td>
                      <td className="py-2 px-4">{personnel.deliveryPersonnel}</td>
                      <td className="py-2 px-4">{personnel.status}</td>
                      <td className="py-2 px-4">{personnel.timestamp}</td>
                      <td className="py-2 px-4">{personnel.notes}</td>
                      <td className="py-2 px-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(personnel)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit size={18} />
                        </button>
                        <button
                          onClick={() => deletePersonnel(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No delivery personnel added yet.</p>
            )}
          </div>
          {isModalOpen && (
            <DeliveryPersonnelFormModal
              onClose={() => setModalOpen(false)}
              onAdd={addDeliveryPersonnel}
              onEdit={updateDeliveryPersonnel}
              personnel={personnelToEdit} // Pass the selected personnel to edit
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DeliveryPersonnel;
