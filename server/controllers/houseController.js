const HouseModel = require('../models/House');

// Retrieve and return all houses from the database.
exports.getAllHouses = async (req, res, next) => {
    const houses = await HouseModel.find();
    res.status(200).send(houses);
};

// Find a single house with an id
exports.getHouseById = async (req, res) => {
    console.log('Request Id:', req.params.id);
    try {
        const house = await HouseModel.findById(req.params.id);
        if (!house) res.status(404).send("house not found!");
        res.status(200).send(house);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a single house by the id in the request
exports.updateHouseById = async (req, res) => {
    try {
        const houseToUpdate = await HouseModel.findByIdAndUpdate(req.params.id, req.body);
        if (!houseToUpdate) res.status(404).send("house not found!");
        res.status(200).send("house is updated");
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create and Save a new house
exports.addHouse = async (req, res) => {
    const houseToAdd = new HouseModel(req.body);
    try {
        await houseToAdd.save();
        res.send(`The house with title: "${req.body.title}" is added`);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a single house with the specified id in the request
exports.deleteHouseById = async (req, res) => {
    try {
        const houseToDelete = await HouseModel.findByIdAndDelete(req.params.id);
        if (!houseToDelete) res.status(404).send("house not found!");
        res.status(200).send("house is deleted");
    } catch (err) {
        res.status(500).send(err);
    }
};