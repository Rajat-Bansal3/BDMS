const express = require('express');
const router = express.Router();

const donationController = require('../controllers/donation.controller.js');

router.get('/', donationController.getAllDonations);
router.get('/:id', donationController.getDonationById);
router.post('/', donationController.createDonation);
router.put('/:id', donationController.updateDonation);
router.delete('/:id', donationController.deleteDonation);

// Export the router
module.exports = router;
