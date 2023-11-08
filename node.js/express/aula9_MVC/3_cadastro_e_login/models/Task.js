const {DataTypes} = require('sequelize');
const User = require('./User')
const db = require('../db/conn');

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    }, 
    description: {
        type: DataTypes.STRING,
        required: true
    }, 
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }, 
})

Task.belongsTo(User)
User.hasMany(Task)
module.exports = Task