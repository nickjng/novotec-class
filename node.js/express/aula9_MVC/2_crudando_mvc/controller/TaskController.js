const Task = require('../models/Task')


module.exports = class TaskController{
    // Create
    static createTask(req,res) {
        res.render('tasks/addTask')
    }

    static async createTaskSave(req, res){

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task);

        res.redirect('/tasks')

    }

    //Show
    static async showTask(req,res){

        const tasks = await Task.findAll({raw: true})

        res.render('tasks/home', {tasks})
    }

    // Delete
    static async deleteTask(req,res){
        await Task.destroy({where: {id : req.body.id}})
        res.redirect('/tasks')
    }

    // Update
    static async updateTask(req,res){
        const task = await Task.findOne({where: {id: req.params.id}, raw: true}) 
        res.render('tasks/updateTask', {task})
    }

    static async updateTaskSave(req, res){
        const updatedTask = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(updatedTask, {where: {id : req.body.id}}) 

        res.redirect('/tasks')

        
    }

    // Done
    static async doneTask(req, res){
        const id = req.body.id;

        const task = await Task.findOne({where: {id:id}, raw: true})

        const taskupdate = {
            done: task.done === 0? true : false
        }

        await Task.update(taskupdate, {where: {id : id}})

        res.redirect('/tasks')
    }
    
    
}