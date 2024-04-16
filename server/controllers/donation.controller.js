const { db } = require("../config/db");
const { errorHandler } = require("../utils/errorHandler");

// Get all donations
exports.getAllDonations = async (req, res, next) => {
  const query = "SELECT * FROM BloodDonation";
  try {
    const database = await db();
    const [donations] = await database.query(query);
    res.status(200).json({ message: "ok", donations });
  } catch (error) {
    console.log("Error in getAllDonations:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Get a donation by ID
exports.getDonationById = async (req, res, next) => {
  const id = req.params.id;
  const query = "SELECT * FROM BloodDonation WHERE DonationID = ?";
  try {
    const database = await db();
    const [donation] = await database.query(query, [id]);
    if (donation.length === 0) {
      return next(errorHandler(404, "Donation not found"));
    }
    res.status(200).json({ message: "ok", donation });
  } catch (error) {
    console.log("Error in getDonationById:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Create a new donation
exports.createDonation = async (req, res, next) => {
  const { DonorID, DonationDate, Quantity, TestingStatus, BloodType } =
    req.body;
  const query =
    "INSERT INTO BloodDonation (DonorID, DonationDate, Quantity , TestingStatus , BloodType) VALUES (?, ?, ? , ? , ?)";
  try {
    const database = await db();
    await database.query(query, [
      DonorID,
      DonationDate,
      Quantity,
      TestingStatus,
      BloodType,
    ]);
    res.status(201).json({ message: "Donation created successfully" });
  } catch (error) {
    console.log("Error in createDonation:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Update an existing donation
exports.updateDonation = async (req, res, next) => {
  const id = req.params.id;
  const { DonorID, DonationDate, Quantity, TestingStatus, BloodType } =
    req.body;
  const query =
    "UPDATE BloodDonation SET DonorID = ?, DonationDate = ?, Quantity = ?, TestingStatus = ? , BloodType = ? WHERE DonationID = ?";
  try {
    const database = await db();
    const [result] = await database.query(query, [
      DonorID,
      DonationDate,
      Quantity,
      TestingStatus,
      BloodType,
      id,
    ]);
    const rowCount = result.affectedRows;
    if (rowCount === 0) {
      return next(errorHandler(404, "Donation not found"));
    }
    res.status(200).json({ message: "Donation updated successfully" });
  } catch (error) {
    console.log("Error in updateDonation:", error.message);
    next(errorHandler(500, error.message));
  }
};

// Delete a donation by ID
exports.deleteDonation = async (req, res, next) => {
  const id = req.params.id;
  const query = "DELETE FROM BloodDonation WHERE DonationID = ?";
  try {
    const database = await db();
    const [result] = await database.query(query, [id]);
    const rowCount = result.affectedRows;
    if (rowCount === 0) {
      return next(errorHandler(404, "Donation not found"));
    }
    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (error) {
    console.log("Error in deleteDonation:", error.message);
    next(errorHandler(500, error.message));
  }
};
