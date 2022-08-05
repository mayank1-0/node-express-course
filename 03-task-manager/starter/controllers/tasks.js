const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req, res, next) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const addTask = asyncWrapper( async (req,res,next) => {
    const task = await Task.create(req.body);
    res.status(201).send(task)
})

const getTask = asyncWrapper( async (req,res,next) => {
        const {id:taskID} = req.params  // destructuring
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return next( createCustomError(`No task with id : ${taskID}` , 404))
        }
        res.status(200).send(task)
})

const deleteTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params  // destructuring
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return next( createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).send(task)
})

const updateTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return next( createCustomError('No task with id : ' + taskID, 404))
        }
        res.status(200).send(task)
})

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask }