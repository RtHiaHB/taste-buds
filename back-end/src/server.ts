// DEPENDENCIES
const express = require('express')
import {Request, Response} from 'express';
const cors = require('cors')
const app = express()
const { Sequelize } = require('sequelize')

//CONFIG / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//ROOT
app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        message: 'Welcome to the Taste Buds API'
    })
})

const usersController = require ('./controllers/users_controller')
app.use('/users', usersController)
const ordersController = require('./controllers/orders_controller')
app.use('/orders', ordersController)
const itemsController = require('./controllers/items_controller')
app.use('/items', itemsController)
const locationsController = require('./controllers/locations_controller')
app.use('/locations', locationsController)
const orderItemsController = require('./controllers/order_items_controller')
app.use('/order_items', orderItemsController)


app.listen(process.env.PORT, () => {
    console.log(`Cooking on port: ${process.env.PORT}`)
})