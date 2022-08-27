// Handles initial GET request for home page
// Handles POST method request for add a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') // variable for the location of the home controller the route points to

// Add specific routes for specific tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)

module.exports = router