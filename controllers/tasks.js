const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../errors/customError');

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getAllTasks = asyncWrapper( 
    async (req,res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
}
);


const getTask = asyncWrapper(
    async (req,res, next) => {
        const {id: taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return next(createCustomError(`no task with the id ${taskId}`, 404));
        }
        res.status(200).json({task});
}
);

const deleteTask = asyncWrapper(
    async (req,res, next) => {
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return next(createCustomError(`no task with the id ${taskId}`, 404));
        }
        res.status(200).json({task});
}
);

const updateTask = asyncWrapper(
    async (req,res, next) => {
       const {id: taskId} = req.params
       const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, {
        new: true,
        runValidators: true,
       }
       )

       if(!task){
            return next(createCustomError(`no task with the id ${taskId}`, 404));
        } 

        res.status(201).json({task});
    }
);

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask};