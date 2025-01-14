import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PatientFormModal from '../components/PatientForm';

function Patients({ isSidebarOpen, toggleSidebar }) {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patientToEdit, setPatientToEdit] = useState(null);

  const addPatient = (patient) => {
    if (patientToEdit) {
      // Edit existing patient
      setPatients(patients.map(p => p.name === patientToEdit.name ? patient : p));
      setPatientToEdit(null);
    } else {
      // Add new patient
      setPatients([...patients, patient]);
    }
    setIsModalOpen(false); // Close modal after adding/updating patient
  };

  const openModalForEdit = (patient) => {
    setPatientToEdit(patient);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setPatientToEdit(null); // Reset for adding a new patient
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleDelete = (patientToDelete) => {
    setPatients(patients.filter(patient => patient.name !== patientToDelete.name));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Patient Management</h1>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:opacity-90"
            >
              + Add Patient
            </button>
          </div>

          {/* Patient List */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Patient List</h2>
            {patients.length === 0 ? (
              <p className="text-gray-500 italic">No patients available. Add new patients to see the list.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patients.map((patient, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 p-4 rounded-lg shadow-md hover:shadow-lg relative"
                  >
                    {/* Edit and Delete Icons on Top Right */}
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={() => openModalForEdit(patient)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(patient)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>

                    <h3 className="font-bold text-lg text-gray-800">{patient.name}</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Diseases:</strong> {patient.diseases || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Room:</strong> {patient.roomNumber}, <strong>Floor:</strong>{' '}
                      {patient.floorNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Contact:</strong> {patient.contactInfo}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Contact:</strong> {patient.emergencyContact}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Patient Form Modal */}
      {isModalOpen && <PatientFormModal onClose={closeModal} onAdd={addPatient} patient={patientToEdit} />}
    </div>
  );
}

export default Patients;
