"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const items = require('express').Router();
const db = require('../models');
const { Item } = db;
const { Op } = require('sequelize');
items.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundItems = yield Item.findAll({
            where: {
                description: { [Op.like]: `%${req.query.name ? req.query.name : ''}` }
            }
        });
        res.status(200).json(foundItems);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//get an item by ID
items.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundItem = yield Item.findOne({
            where: { item_id: req.params.id }
        });
        res.status(200).json(foundItem);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//add an item
items.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = yield Item.create(req.body);
        res.status(200).json({
            message: 'Successfully created a new item',
            data: newItem
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//update an item
items.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItems = yield Item.update(req.body, {
            where: {
                item_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedItems} item(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//delete an item
items.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItems = yield Item.destroy({
            where: {
                item_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} item(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = items;
