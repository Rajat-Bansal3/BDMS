const express = require('express');
const router = express.Router();

const recipientController = require('../controllers/recipient.controller.js');

router.get('/', recipientController.getAllRecipients);
router.get('/:id', recipientController.getRecipientById);
router.post('/', recipientController.createRecipient);
router.put('/:id', recipientController.updateRecipient);
router.delete('/:id', recipientController.deleteRecipient);

// Export the router
module.exports = router;
