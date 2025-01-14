import React, { useState, useEffect } from 'react';

function DietChartModal({ onClose, onAdd, dietChart }) {
  // Initialize formData either with dietChart for editing or empty for adding a new chart
  const [formData, setFormData] = useState({
    patientName: '',
    morningMeal: '',
    eveningMeal: '',
    nightMeal: '',
    instructions: '',
  });

  // When dietChart prop changes (for editing), update formData
  useEffect(() => {
    if (dietChart) {
      setFormData({
        patientName: dietChart.patientName,
        morningMeal: dietChart.morningMeal,
        eveningMeal: dietChart.eveningMeal,
        nightMeal: dietChart.nightMeal,
        instructions: dietChart.instructions,
      });
    }
  }, [dietChart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData); // Add or edit based on the dietChart prop
    setFormData({
      patientName: '',
      morningMeal: '',
      eveningMeal: '',
      nightMeal: '',
      instructions: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-lg shadow-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{dietChart ? 'Edit Diet Chart' : 'Add Diet Chart'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            required
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
          />
          <input
            type="text"
            name="morningMeal"
            value={formData.morningMeal}
            onChange={handleChange}
            placeholder="Morning Meal"
            required
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
          />
          <input
            type="text"
            name="eveningMeal"
            value={formData.eveningMeal}
            onChange={handleChange}
            placeholder="Evening Meal"
            required
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
          />
          <input
            type="text"
            name="nightMeal"
            value={formData.nightMeal}
            onChange={handleChange}
            placeholder="Night Meal"
            required
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
          />
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Special Instructions"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
            rows="3"
          />

          {/* Action Buttons */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              {dietChart ? 'Save Changes' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DietChartModal;
