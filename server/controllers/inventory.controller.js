const { db } = require("../config/db.js");
const { errorHandler } = require("../utils/errorHandler.js");

exports.getAllInventory = async (req, res, next) => {
  const query = "SELECT * FROM BloodInventory";
  try {
    const database = await db();
    const [rows , fields] = await database.query(query);
    res.status(200).json({ message: "ok", inventory:rows });
  } catch (error) {
    console.log("Error in getAllBloodInventory:", error.message);
    next(errorHandler(500, error));
  }
};

exports.getInventoryById = async (req, res, next) => {
  const id = req.params.id;
  const query = `SELECT * FROM BloodInventory WHERE BloodID = ?`;
  try {
    const database = await db();
    const [blood] = await database.query(query, [id]);
    if (blood.length === 0) {
      res.status(404).json({ message: "Blood Inventory Not Found" });
    } else {
      res.status(200).json({ message: "ok", blood });
    }
  } catch (error) {
    console.log("Error in getBloodInventoryById:", error.message);
    next(errorHandler(500, error));
  }
};

exports.createInventory = async (req, res, next) => {
  const { DonationID, BloodType, Quantity, ExpiryDate, StorageLocation, AvailabilityStatus } =
    req.body;
  const query =
    "INSERT INTO BloodInventory (DonationID, BloodType, Quantity, ExpiryDate, StorageLocation, AvailabilityStatus) VALUES (?, ?, ?, ?, ?, ?)";
  try {
    const database = await db();
    await database.query(query, [DonationID, BloodType, Quantity, ExpiryDate, StorageLocation, AvailabilityStatus]);
    res.status(200).json({ message: "Blood Inventory Created Successfully" });
  } catch (error) {
    console.log("Error in createBloodInventory:", error.message);
    next(errorHandler(500, error));
  }
};

exports.updateInventory = async (req, res, next) => {
  const id = req.params.id;
  const { DonationID, BloodType, Quantity, ExpiryDate, StorageLocation, AvailabilityStatus } =
    req.body;
  const query = `
    UPDATE BloodInventory
    SET DonationID = ?, BloodType = ?, Quantity = ?, ExpiryDate = ?, StorageLocation = ?, AvailabilityStatus = ?
    WHERE BloodID = ?
    `;
  try {
    const database = await db();
    await database.query(query, [DonationID, BloodType, Quantity, ExpiryDate, StorageLocation, AvailabilityStatus, id]);
    res.status(200).json({ message: "Blood Inventory Updated Successfully" });
  } catch (error) {
    console.log("Error in updateBloodInventory:", error.message);
    next(errorHandler(500, error));
  }
};

exports.deleteInventory = async (req, res, next) => {
  const id = req.params.id;
  const queryDel = `DELETE FROM BloodInventory WHERE BloodID = ?`;
  const queryFind = `SELECT * FROM BloodInventory WHERE BloodID = ?`;
  try {
    const database = await db();
    const blood = await database.query(queryFind, [id]);
    if (blood[0].length === 0) {
      return res.status(404).json({ message: "Blood Inventory not Found" });
    }
    await database.query(queryDel, [id]);
    res.status(200).json({ message: "Blood Inventory Deleted Successfully" });
  } catch (error) {
    console.log("Error in deleteBloodInventory:", error.message);
    next(errorHandler(500, error));
  }
};
exports.available = async (req, res, next) => {
  const query = "SELECT * FROM BloodInventory WHERE AvailabilityStatus = 'Available'";
  try {
    const database = await db();
    const [blood] = await database.query(query);
    if (!blood || blood.length === 0) {
      return res.status(404).json({ message: "Blood Inventory is empty" });
    }
    res.status(200).json({ message: "ok", blood });
  } catch (error) {
    console.log("Error in available:", error.message);
    next(errorHandler(500, error));
  }
};
