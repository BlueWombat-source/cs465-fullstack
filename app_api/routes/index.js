const express = require('express'); // Express app 
const router = express.Router();    // Router logic

// Import the controller to be routed
const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripsList

// GET Method routes tripsFindByCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;