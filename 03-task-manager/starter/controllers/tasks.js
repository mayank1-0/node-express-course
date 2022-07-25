const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}

const addTask = async (req,res) => {
    try{
    const task = await Task.create(req.body);
    res.status(201).send(task)
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}

const getTask = async (req,res) => {
    try{
        const {id:taskId} = req.params  // destructuring
        const task = await Task.findOne({_id: taskId})
        if(!task){
            return res.status(404).send({msg: 'No such task with id: ' + taskId + ' exists'})
        }
        res.status(200).send(task)
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = async (req,res) => {
    try{
        const {id:taskId} = req.params  // destructuring
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task){
            return res.status(404).send({msg: 'No such task with id: ' + taskId + ' exists'})
        }
        res.status(200).send(task)
    }
    catch(error){
        res.status(500).send({msg: error})
    }
}

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask}