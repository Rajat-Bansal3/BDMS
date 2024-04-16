const { db } = require("../config/db");
const { errorHandler } = require("../utils/errorHandler");

exports.getAllRecipients = async (req, res, next) => {
  const query = "SELECT * from Recipient";
  try {
    const database = await db();
    const [rows, fields] = await database.query(query);
    res.status(200).json({ message: "ok", recipients: rows });
  } catch (error) {
    console.log(" in get All Donors", error.message);
    next(errorHandler(500, error));
  }
};
exports.getRecipientById = async (req, res, next) => {
  const id = req.params.id;
  const query = "SELECT * from Recipient where RecipientID = ?";
  try {
    const database = await db();
    const [rows, fields] = await database.query(query, [id]);
    res.status(200).json({ message: "ok", recipient: rows });
  } catch (error) {
    console.log(" in Recipient by id", error.message);
    next(errorHandler(500, error));
  }
};
exports.createRecipient = async (req, res, next) => {
  const { Name, BloodType, Age, Gender, ContactInfo, MedicalHistory } =
    req.body;
  const query =
    "INSERT INTO Recipient (Name, BloodType, Age, Gender, ContactInfo, medicalHistory)VALUES(? , ? , ? , ? , ? , ?)";
  try {
    const database = await db();
    await database.query(query, [
      Name,
      BloodType,
      Age,
      Gender,
      ContactInfo,
      MedicalHistory,
    ]);
    res.status(200).json({ message: "Recipient Created Successfully" });
  } catch (error) {
    console.log(" in make Recipient", error.message);
    next(errorHandler(500, error));
  }
};
exports.updateRecipient = async (req, res, next) => {
  const id = req.params.id;
  const { Name, BloodType, Age, Gender, ContactInfo, MedicalHistory } =
    req.body;
  const query = `
        UPDATE Recipient
        SET Name = ?, BloodType = ?, Age = ?, Gender = ?, ContactInfo = ?, MedicalHistory = ?
        WHERE RecipientID = ?
    `;
  try {
    const database = await db();
    await database.query(query, [
      Name,
      BloodType,
      Age,
      Gender,
      ContactInfo,
      MedicalHistory,
      id,
    ]);
    res.status(200).json({ message: "Recipient updated Successfully" });
  } catch (error) {
    console.log("Error in updateRecipient:", error.message);
    next(errorHandler(500, error));
  }
};

exports.deleteRecipient = async (req, res, next) => {
    const id = req.params.id;
  const queryDel = `DELETE FROM Recipient WHERE RecipientID =?`;
  const queryFind = `SELECT * FROM Recipient WHERE RecipientID =?`;
  try {
    const database = await db();
    const Recipient = await database.query(queryFind , [id]) 
    if(Recipient[0].length === 0){
    return res.status(404).json({ message: "Recipient not Found" });
    }
    await database.query(queryDel, [id])
    res.status(200).json({ message: "Recipient deleted Successfully" });
  } catch (error) {
    console.log(" in delete Recipients", error.message);
    next(errorHandler(500, error));
  }
};
