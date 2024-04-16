// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the Inventory controller
const inventoryController = require('../controllers/inventory.controller.js');

// Define routes for Inventory CRUD operations
router.get('/', inventoryController.getAllInventory);
router.get('/available', inventoryController.available);
router.get('/:id', inventoryController.getInventoryById);
router.post('/', inventoryController.createInventory);
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

// Export the router
module.exports = router;
