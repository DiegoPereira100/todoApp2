const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

const addTask = async (task) => {
    const { title } = task;

    const date = new Date(Date.now()).toLocaleString();
    
    const [addTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'Pendente', date]);

    return {insertId: addTask.insertId};
}

const removeTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removeTask;
}

const updateTask = async (id, task) => {

    const {title, status} = task;

    const updateTask = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    return updateTask;
}

module.exports = {
    getAll, addTask, removeTask, updateTask
};