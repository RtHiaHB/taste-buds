'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locations = require('express').Router();
const models_1 = __importDefault(require("../models"));
const { Location } = models_1.default;
const sequelize_1 = require("sequelize");
//get ALL locations, or get a location by city
locations.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundLocations = yield Location.findAll({
            where: {
                city: { [sequelize_1.Op.like]: `%${req.query.city ? req.query.city : ''}` }
            }
        });
        res.status(200).json(foundLocations);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get a location by ID
locations.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundLocation = Location.findOne({
            where: { loc_id: req.params.id }
        });
        res.status(200).json(foundLocation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//create a location
locations.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const newLocation = yield Location.create(req.body);
        res.status(200).json(newLocation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//update a location
locations.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedLocations = yield Location.update(req.body, {
            where: {
                loc_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedLocations} location(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//delete a location
locations.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLocations = yield Location.destroy({
            where: {
                loc_id: req.params.id
            }
        });
        res.status(200).json(`Successfully deleted ${deletedLocations} location(s)`);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = locations;
