const orders = require('express').Router()
const db = require('../models')
const { Order } = db
const { Op } = require('sequelize')

orders.get('/', async(req, res) => {
    try {
        const foundOrders = await Order.findAll({
            order: [ [ 'order_id', 'ASC' ] ]
        })
        res.status(200).json(foundOrders)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get an order by ID
orders.get('/:id', async (req, res) => {
    try {
        const foundOrder = await Order.findOne({
            where: { order_name: req.params.id },
            include: [
                {
                    model: Item,
                    as: "items",
                    through: { attributes: [] }
                }
            ]
        })
        res.status(200).json(foundOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Create an order
orders.post('/', async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new order',
            data: newOrder
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update an order
orders.put('/:id', async (req, res) => {
    try {
        const updatedOrders = await Order.update(req.body, {
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedOrders} order(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

orders.delete('/:id', async (req, res) => {
    try {
        const deletedOrders = await Order.destroy({
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedOrders} order(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = orders