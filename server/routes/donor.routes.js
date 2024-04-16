// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the Donor controller
const donorController = require('../controllers/donor.controller.js');

// Define routes for Donor CRUD operations
router.get('/', donorController.getAllDonors);
router.get('/:id', donorController.getDonorById);
router.post('/', donorController.createDonor);
router.put('/:id', donorController.updateDonor);
router.delete('/:id', donorController.deleteDonor);

// Export the router
module.exports = router;
