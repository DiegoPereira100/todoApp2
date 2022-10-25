const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};

const addTask = async (task) => {
    const { title } = task;

    const date = new Date(Date.now()).toLocaleDateString();
    
    const [addTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'Pendente', date]);

    return {insertId: addTask.insertId};
}

module.exports = {
    getAll, addTask
};