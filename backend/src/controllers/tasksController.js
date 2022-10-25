const taskModel = require('../models/tasksModel');

const getAll = async (req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
};

const postTask = async (req, res) => {
    const postTask = await taskModel.addTask(req.body);
    return res.status(201).json(postTask);
}

module.exports = {
    getAll, postTask
}