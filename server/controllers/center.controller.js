const { db } = require("../config/db");
const { errorHandler } = require("../utils/errorHandler");
const sendMail = require("../utils/Mailer");

exports.getAllCenters = async (req, res, next) => {
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

exports.getCenterById = async (req, res, next) => {
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

exports.createCenter = async (req, res, next) => {
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

exports.updateCenter = async (req, res, next) => {
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

exports.deleteCenter = async (req, res, next) => {
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
exports.getMostRecentCenter = async (req, res, next) => {
  const currentDate = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const query = "SELECT * FROM DonationCenter WHERE Date > ? ORDER BY Date ASC";
  try {
    const database = await db();
    const [donation] = await database.query(query, [currentDate]);
    if (donation.length === 0) {
      return next(errorHandler(404, "No upcoming donations found"));
    }
    
    res.status(200).json({ message: "ok", donation });
  } catch (error) {
    console.log("Error in getUpcomingDonation:", error.message);
    next(errorHandler(500, error.message));
  }
};
