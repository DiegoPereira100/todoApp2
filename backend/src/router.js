const express = require('express');
const tasksController = require('./controllers/tasksController');
const taskMiddlewares = require('./middlewares/taskMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks',taskMiddlewares.validateBodyTitle, tasksController.postTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',taskMiddlewares.validateBodyTitle, taskMiddlewares.validateBodyStatus, tasksController.updateTask);

module.exports = router;