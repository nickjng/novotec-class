const Task = require('../models/Task')


module.exports = class TaskController{
    
    static createTask(req,res) {
        res.render('home')
    }

    static showTask(req,res){
        res.render('show')
    }
    
    
}