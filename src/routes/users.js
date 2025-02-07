const express =  require('express')
const usersRouter = express.Router()
const usersController = require('../controller/usersControllers')

usersRouter.get('/', usersController.getUsers)
usersRouter.get('/message', usersController.getMessage)


module.exports = {
    usersRouter
}