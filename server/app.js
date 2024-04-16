const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");

const { db } = require("./config/db.js");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

const donorRoutes = require("./routes/donor.routes");
const donationRoutes = require("./routes/donation.routes");
const recipientRoutes = require("./routes/recipient.routes");
const inventoryRoutes = require("./routes/inventory.routes");

app.use("/api/donors", donorRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/recipients', recipientRoutes);
app.use('/api/inventory', inventoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Blood Donation Management System API!");
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

db()
  .then((connection) => {
    console.log("Connected to the database");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
