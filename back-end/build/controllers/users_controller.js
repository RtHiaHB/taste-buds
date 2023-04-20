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
const users = require('express').Router();
const models_1 = __importDefault(require("../models"));
const { User } = models_1.default;
const sequelize_1 = require("sequelize");
users.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUsers = yield User.findAll({
            order: [['email', 'ASC']],
            where: {
                email: { [sequelize_1.Op.like]: `%${req.query.email ? req.query.email : ''}%` }
            }
        });
        res.status(200).json(foundUsers);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//Get a user by ID
users.get('/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUser = yield User.findOne({
            where: { email: req.params.email }
        });
        res.status(200).json(foundUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//Create a user
users.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield User.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new User',
            data: newUser
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//Update a user
users.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUsers = yield User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} users`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//Delete a user
users.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUsers = yield User.destroy({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = users;
