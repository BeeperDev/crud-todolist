//  This route will handle editing and deleting items, as well as rendering the edit page iteself

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit') // variable for the location of the home controller the route points to

// Add specific routes for specific tasks
router.get('/:id', editController.getEdit)      

router.get('/remove/:id', editController.deleteTask)

router.post('/:id', editController.updateTask)

module.exports = router