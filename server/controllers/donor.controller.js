const { db } = require("../config/db.js");
const { errorHandler } = require("../utils/errorHandler.js");
exports.getAllDonors = async (req, res, next) => {
  const query = "select * from Donor";
  try {
    const database = await db();
    const [donors] = await database.query(query);
    res.status(200).json({ message: "ok", donors });
  } catch (error) {
    console.log(" in get All Donors", error.message);
    next(errorHandler(500, error));
  }
};
exports.getDonorById = async (req, res, next) => {
  const id = req.params.id;
  const query = `select * from Donor where DonorID = ?`;
  try {
    const database = await db();

    const [donor] = await database.query(query, id);
    if (donor.length === 0) {
      res.status(404).json({ message: "Donor Not Found" });
    } else res.status(200).json({ message: "ok", donor });
  } catch (error) {
    console.log(" in get donors by id", error.message);
    next(errorHandler(500, error));
  }
};
exports.createDonor = async (req, res, next) => {
  const { Name, BloodType, Age, Gender, ContactInfo, LastDonationDate } =
    req.body;
  const query =
    "INSERT INTO Donor (Name, BloodType, Age, Gender, ContactInfo, LastDonationDate)VALUES(? , ? , ? , ? , ? , ?)";
  try {
    const database = await db();
    await database.query(query, [
      Name,
      BloodType,
      Age,
      Gender,
      ContactInfo,
      LastDonationDate,
    ]);
    res.status(200).json({ message: "Donor Created Successfully" });
  } catch (error) {
    console.log(" in make donors", error.message);
    next(errorHandler(500, error));
  }
};
exports.updateDonor = async (req, res, next) => {
  const id = req.params.id;
  const { Name, BloodType, Age, Gender, ContactInfo, LastDonationDate } =
    req.body;
  const query = `
    UPDATE Donor
    SET Name = ?, BloodType = ?, Age = ?, Gender = ?, ContactInfo = ?, LastDonationDate = ?
    WHERE DonorID = ?
    `;
  try {
    const database = await db();
    await database.query(query, [
      Name,
      BloodType,
      Age,
      Gender,
      ContactInfo,
      LastDonationDate,
      id,
    ]);
    res.status(200).json({ message: "Donor updated Successfully" });
  } catch (error) {
    console.log(" in update donors", error.message);
    next(errorHandler(500, error));
  }
};
exports.deleteDonor = async (req, res, next) => {
  const id = req.params.id;
  const queryDel = `DELETE FROM Donor WHERE DonorID =?`;
  const queryFind = `SELECT * FROM Donor WHERE DonorID =?`;
  try {
    const database = await db();
    const donor = await database.query(queryFind , [id]) 
    if(donor[0].length === 0){
    return res.status(404).json({ message: "Donor not Found" });
    }
    await database.query(queryDel, [id])
    res.status(200).json({ message: "Donor deleted Successfully" });
  } catch (error) {
    console.log(" in delete donors", error.message);
    next(errorHandler(500, error));
  }
};
const sendMail = () =>{
  
}