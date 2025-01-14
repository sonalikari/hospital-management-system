import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DietChartModal from '../components/DietChartForm';

function DietCharts({ isSidebarOpen, toggleSidebar }) {
  const [dietCharts, setDietCharts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [dietChartToEdit, setDietChartToEdit] = useState(null);

  // Toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);

  // Add a new diet chart
  const addDietChart = (chart) => {
    if (dietChartToEdit) {
      // Edit existing chart
      setDietCharts(
        dietCharts.map((item) =>
          item.patientName === dietChartToEdit.patientName ? chart : item
        )
      );
      setDietChartToEdit(null);
    } else {
      // Add new chart
      setDietCharts([...dietCharts, chart]);
    }
    toggleModal(); // Close the modal after adding
  };

  // Open modal for editing an existing diet chart
  const openModalForEdit = (chart) => {
    setDietChartToEdit(chart);
    toggleModal();
  };

  // Delete a diet chart
  const deleteDietChart = (chartToDelete) => {
    setDietCharts(dietCharts.filter((chart) => chart.patientName !== chartToDelete.patientName));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex-1 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">Diet Charts</h1>
            <button
              onClick={toggleModal}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:opacity-90"
            >
              + Add Diet Chart
            </button>
          </div>

          {/* List of Diet Charts */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Diet Chart List</h2>
            {dietCharts.length === 0 ? (
              <div className="text-gray-500 italic">No diet charts available. Add one using the button above.</div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dietCharts.map((chart, index) => (
                  <li
                    key={index}
                    className="relative p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
                  >
                    {/* Edit and Delete Icons positioned top-right */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => openModalForEdit(chart)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteDietChart(chart)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt className="h-5 w-5" />
                      </button>
                    </div>

                    <h3 className="text-lg font-semibold text-blue-600">{chart.patientName}</h3>
                    <p className="text-gray-700 mt-2">
                      <strong>Morning:</strong> {chart.morningMeal}
                    </p>
                    <p className="text-gray-700 mt-1">
                      <strong>Evening:</strong> {chart.eveningMeal}
                    </p>
                    <p className="text-gray-700 mt-1">
                      <strong>Night:</strong> {chart.nightMeal}
                    </p>
                    <p className="text-gray-600 mt-3">
                      <strong>Instructions:</strong> {chart.instructions}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <DietChartModal
          onClose={toggleModal}
          onAdd={addDietChart}
          dietChart={dietChartToEdit}
        />
      )}
    </div>
  );
}

export default DietCharts;
