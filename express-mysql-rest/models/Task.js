var db = require('../dbconnection');

var Task = {

  getAllTasks: function(callback) {
    return db.query('select * from task', callback);
  },

  getTaskById: function(id, callback) {
    return db.query('select * from task where id = ?', [id], callback);
  },

  addTask: function(Task, callback) {
    return db.query('insert into task values (?,?,?)', [Task.id, Task.title, Task.status], callback);
  },

  deleteTask: function(id, callback) {
    return db.query('delete from task where id = ?', [id], callback);
  },

  updateTask: function(id, Task, callback){
    return db.query('update task set title = ?, status = ? where id = ? ', [Task.title, Task.status, id], callback);
  }
};

module.exports = Task;
