const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn');
const exphbs = require('express-handlebars');
// models
const Task = require('./models/Task');
const User = require('./models/User');
// routes
const taskRoutes = require('./router/tasksRoutes');
const userRoutes = require('./router/usersRoutes');
const authRoutes = require('./router/authRoutes')

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

// session middleware
app.use(session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function() {},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),

    cookie:{
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }

}))

// flahs messages
app.use(flash())

// set session to res
app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})


app.use(express.static('public'))


app.use('/tasks', taskRoutes)
app.use('/users', userRoutes)
app.use('/', authRoutes)
app.use((req, res) => {
    res.status(404).render("404", {layout: 'authLayout'});
})

conn.sync({force: true}).then(() =>{
    app.listen(port)
}).catch((error) =>{
    console.log('app não funcionando', error);
})