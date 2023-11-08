const express = require('express')
const app = express()
const port = 3000;
const conn = require('./db/conn')
const exphbs = require('express-handlebars')
const Task = require('./models/Task')
const taskRoutes = require('./router/tasksRoutes')

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.use('/tasks', taskRoutes)

conn.sync().then(() =>{
    app.listen(port)
}).catch((error) =>{
    console.log('app não funcionando', error);
})