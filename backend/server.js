const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const auth = require("./routes/authRoutes");
const delivery = require("./routes/deliveryRoutes");
const dietchart = require("./routes/dietChartRoutes");
const pantry = require("./routes/pantryRoutes");
const patient= require("./routes/patientRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', auth);
app.use('/api/deliveries', delivery);
app.use('/api/dietCharts', dietchart);
app.use('/api/pantries', pantry);
app.use('/api/patients', patient);

// Add other routes as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));