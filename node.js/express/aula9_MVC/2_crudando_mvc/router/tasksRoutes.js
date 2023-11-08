const express = require('express')
const router = express.Router();

const TaskController = require('../controller/TaskController')
//add
router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave)

//delete
router.post('/delete', TaskController.deleteTask)
router.get('/', TaskController.showTask);

//update
router.get('/update/:id', TaskController.updateTask);
router.post('/update', TaskController.updateTaskSave);

//done
router.post('/done', TaskController.doneTask)

module.exports = router