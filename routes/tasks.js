const express = require('express');
const router = express.Router();
const {getAllTasks, getTask, updateTask, deleteTask, createTask} = require('../controllers/tasks');

//getting all tasks
router.route('/').get(getAllTasks)  
//getting single task
router.route('/:id').get(getTask);
//creating single task
router.route('/').get(getAllTasks).post(createTask);
//delete single task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;