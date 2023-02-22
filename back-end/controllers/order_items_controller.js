const order_items = require('express').Router()
const db = require('../models')
const { Order_item } = db
const { Op } = require('sequelize')

//get ALL order Items

order_items.get('/', async (req, res) => {
    try {
        const foundOrderItems = Order_item.findAll()
        res.status(200).json(foundOrderItems)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get order items by order number
order_items.get('/:id', async (req, res) => {
    try {
        const foundOrderItems = await Order_item.findAll({
            where: {
                order_id:req.params.id
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//create order item
order_items.post('/', async (req, res) => {
    try {
        const newOrderItem = await Order_item.create(req.body)
        res.status(200).json(newOrderItem)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update an order item
order_items.put('/:id', async (req, res) => {
    try {
        const updatedOrderItems = await Order_item.update(req.body, {
            where: {
                order_items_id: req.params.id
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete an order item
order_items.delete('/:id', async (req, res) => {
    try {
        const deletedOrderItems = await Order_item.destroy({
            where: {
                order_item_id: req.params.id
            }
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = order_items