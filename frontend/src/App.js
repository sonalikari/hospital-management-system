import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import DietCharts from './pages/DietCharts';
import Pantry from './pages/Pantry';
import Deliveries from './pages/Deliveries';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        />
        <Route
          path="/patients"
          element={<Patients isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        />
        <Route
          path="/diet-charts"
          element={<DietCharts isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        />
        <Route
          path="/pantry"
          element={<Pantry isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        />
        <Route
          path="/deliveries"
          element={<Deliveries isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
