const taskModel = require('../models/tasksModel');

const getAll = async (req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
};

const postTask = async (req, res) => {
    const postTask = await taskModel.addTask(req.body);
    return res.status(201).json(postTask);
}

const deleteTask = async(req, res) => {
    const { id } = req.params;

    await taskModel.removeTask(id)
    return res.status(204).json();
}

const updateTask = async (req, res) => {
    const { id } = req.params;

    await taskModel.updateTask(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll, postTask, deleteTask, updateTask
}