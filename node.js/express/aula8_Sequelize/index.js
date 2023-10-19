const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();
const conn = require('./db/conn')
const User = require('./models/User')
const Users = require('./Users');
const Experiencie = require('./models/Experiencie')
const { raw } = require('mysql2');

//BODY
app.use(
    express.urlencoded({
        extended: true,
    }),
)
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.use('/users', Users)


app.get('/exp/create/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('addExp',{user})

})

app.post('/exp/create', async (req,res)=>{

    const UserId = req.body.UserId;
    const cargo = req.body.cargo;
    const empresa = req.body.empresa;
    const salario = req.body.salario;

    const Exp ={
        UserId,
        cargo,
        empresa,
        salario
    }

    await Experiencie.create(Exp)

    res.redirect(`/users/${UserId}`)


})


app.get('/', async (req, res) => {

    const candidatos = await User.findAll({ raw: true })

    console.log(candidatos);

    res.render('home', { candidatos })

})

app.use((req, res) => {
    res.status(404).render("404");
})

conn.sync().then(() => {
    app.listen(port)
}).catch((error) => {
    console.log('não foi possivel criar uma conexão com o banco de dados');
})
