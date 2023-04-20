'use strict'
const locations = require('express').Router()
import {Request, Response} from 'express';
import db from '../models';
const { Location } = db
import { Op } from 'sequelize';

//get ALL locations, or get a location by city
locations.get('/', async (req: Request, res: Response) => {
    try {
        const foundLocations = await Location.findAll({
            where: {
                city: { [Op.like]: `%${req.query.city ? req.query.city : ''}` }
            }
        })
        res.status(200).json(foundLocations)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a location by ID
locations.get('/:id', async (req: Request, res: Response) => {
    try {
        const foundLocation = Location.findOne({
            where: { loc_id: req.params.id }
        })
        res.status(200).json(foundLocation)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create a location
locations.post('/', async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const newLocation = await Location.create(req.body)
        res.status(200).json(newLocation)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update a location
locations.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedLocations = await Location.update(req.body, {
            where: {
                loc_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedLocations} location(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a location
locations.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedLocations = await Location.destroy({
            where: {
                loc_id: req.params.id
            }
        })
        res.status(200).json(`Successfully deleted ${deletedLocations} location(s)`)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = locations