const items = require('express').Router()
const db = require('../models')
const { Item } = db
const { Op } = require('sequelize')

items.get('/', async (req, res) => {
    try {
        const foundItems = await Item.findAll({
            where: {
                description: { [Op.like]: `%${req.query.name ? req.query.name : ''}`}
            }
        })
        res.status(200).json(foundItems)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get an item by ID
items.get('/:id', async (req, res) => {
    try {
        const foundItem = await Item.findOne({
            where: { item_id: req.params.id }
        })
        res.status(200).json(foundItem)
    } catch (err) {
        res.status(500).json(err)
    }
})

//add an item
items.post('/', async (req, res) => {
    try {
        const newItem = await Item.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new item',
            data: newItem
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//update an item
items.put('/:id', async (req, res) => {
    try {
        const updatedItems = await Item.update(req.body, {
            where: {
                item_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItems} item(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete an item
items.delete('/:id', async (req, res) => {
    try {
        const deletedItems = await Item.destroy({
            where: {
                item_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems} item(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = items