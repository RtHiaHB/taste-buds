const users = require('express').Router()
const db = require('../models')
const { User } =  db
const { Op } = require('sequelize')

users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll({
            order: [ [ 'email', 'ASC'] ],
            where: {
                email: { [Op.like]: `%${req.query.email ? req.query.email : ''}%`}
            }
        })
        res.status(200).json(foundUsers)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get a user by ID
users.get('/:email', async (req, res)  => {
    try {
        const foundUser = await User.findOne({
            where: { email: req.params.email }
        })
        res.status(200).json(foundUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Create a user
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new User',
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update a user
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} users`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Delete a user
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = users