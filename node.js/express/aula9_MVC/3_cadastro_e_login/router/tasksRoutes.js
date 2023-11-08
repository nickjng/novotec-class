const express = require('express')
const router = express.Router();


//helpers
const checkAuth = require('../helpers/auth').checkAuth

const TaskController = require('../controller/TaskController')
//add
router.get('/add', checkAuth, TaskController.createTask);
router.post('/add', TaskController.createTaskSave)

//delete
router.post('/delete', TaskController.deleteTask)
router.get('/', checkAuth, TaskController.showTask);

//update
router.get('/update/:id', checkAuth, TaskController.updateTask);
router.post('/update', TaskController.updateTaskSave);

//done
router.post('/done', TaskController.doneTask)

module.exports = router