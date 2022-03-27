const express = require('express');
const router = express.Router();
const { getAllHouses, getHouseById, updateHouseById, addHouse, deleteHouseById } = require('../controllers/houseController');

router
    .route('/') // path = '/api/houses'
    .get(getAllHouses)
    .post(addHouse)

router
    .route('/:id') // path = '/api/houses/id'
    .get(getHouseById)
    .put(updateHouseById)
    .delete(deleteHouseById)


module.exports = router;