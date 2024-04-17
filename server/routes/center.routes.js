const express = require('express');
const router = express.Router();

const centerController = require('../controllers/center.controller.js');

router.get('/', centerController.getAllCenters);
router.get('/recent', centerController.getMostRecentCenter);
router.get('/:id', centerController.getCenterById);
router.post('/', centerController.createCenter);
router.put('/:id', centerController.updateCenter);
router.delete('/:id', centerController.deleteCenter);

module.exports = router;
