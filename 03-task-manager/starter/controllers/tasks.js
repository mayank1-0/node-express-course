const Task = require('../models/Task')

const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

const addTask = async (req,res) => {
    const task = await Task.create(req.body);
    res.status(201).send(task)
}

const getTask = (req,res) => {
    res.send('get single task')
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = (req,res) => {
    res.send('delete task')
}

module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask}