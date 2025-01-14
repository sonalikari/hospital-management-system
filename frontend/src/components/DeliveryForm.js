import React, { useState, useEffect } from 'react';

function DeliveryPersonnelFormModal({ onClose, onAdd, onEdit, personnel }) {
  const [formData, setFormData] = useState({
    patientName: '',
    deliveryPersonnel: '',
    status: 'Pending',
    timestamp: new Date().toISOString().split('T')[0], // Default to today's date
    notes: '',
  });

  useEffect(() => {
    if (personnel) {
      setFormData({
        ...personnel,
      });
    }
  }, [personnel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personnel) {
      onEdit(formData); // Update the existing personnel
    } else {
      onAdd(formData); // Add a new personnel
    }
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          {personnel ? 'Edit Delivery Personnel' : 'Add Delivery Personnel'}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Patient Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Delivery Personnel */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Delivery Personnel</label>
            <input
              type="text"
              name="deliveryPersonnel"
              value={formData.deliveryPersonnel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          {/* Timestamp */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              name="timestamp"
              value={formData.timestamp}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {personnel ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeliveryPersonnelFormModal;
