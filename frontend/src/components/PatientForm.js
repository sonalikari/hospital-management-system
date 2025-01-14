import React, { useState, useEffect } from 'react';

function PatientFormModal({ onClose, onAdd, patient }) {
  const [formData, setFormData] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    age: '',
    gender: '',
    contactInfo: '',
    emergencyContact: '',
    others: '',
  });

  // Pre-fill the form with patient data if it exists
  useEffect(() => {
    if (patient) {
      setFormData({ ...patient });
    }
  }, [patient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData); // Pass the form data to the parent for adding or editing
    onClose(); // Close modal after submitting
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-lg shadow-lg p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{patient ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Patient Name"
            required
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />

          {/* Diseases and Allergies */}
          <input
            type="text"
            name="diseases"
            value={formData.diseases}
            onChange={handleInputChange}
            placeholder="Diseases"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleInputChange}
            placeholder="Allergies"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />

          {/* Room and Bed Details */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleInputChange}
              placeholder="Room Number"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="bedNumber"
              value={formData.bedNumber}
              onChange={handleInputChange}
              placeholder="Bed Number"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Floor and Age */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="floorNumber"
              value={formData.floorNumber}
              onChange={handleInputChange}
              placeholder="Floor Number"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Contact Details */}
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder="Contact Information"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            placeholder="Emergency Contact"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Additional Details */}
          <textarea
            name="others"
            value={formData.others}
            onChange={handleInputChange}
            placeholder="Other Details (Optional)"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
          />

          {/* Action Buttons */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              {patient ? 'Update Patient' : 'Add Patient'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientFormModal;
