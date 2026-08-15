const express = require('express'); // Express app 
const router = express.Router();    // Router logic

// Import the controller to be routed
const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip
    

// GET Method routes tripsFindByCode - requires parameter tripCode
// PUT Method routes tripsUpdateTrip - requires parameter tripCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;