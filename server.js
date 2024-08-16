const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const db = require("./database/models/index");
db.sequelize.sync();
const errorHandler = require('./middleware/errorHandler');
//test
const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
app.use(cors({
    origin: '*', // Allows all origins; adjust as needed for security
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

app.use(express.json());
const router = require("./route");
app.use("/api", router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port} in ${process.env.NODE_ENV} mode`);
});