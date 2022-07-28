const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const addTask = asyncWrapper( async (req,res) => {
    const task = await Task.create(req.body);
    res.status(201).send(task)
})

const getTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params  // destructuring
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(404).send({msg: 'No such task with id: ' + taskID + ' exists'})
        }
        res.status(200).send(task)
})

const deleteTask = asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params  // destructuring
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).send({msg: 'No such task with id: ' + taskID + ' exists'})
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
            return res.status(404).send({msg: 'No such task with the given id: '+ taskID +' exists'})
        }
        res.status(200).send(task)
})

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask}