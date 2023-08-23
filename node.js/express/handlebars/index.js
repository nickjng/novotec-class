const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000;

const app = express()

app.engine('handlebars', exphbs.engine())

app.use(express.static('public'))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/gatos', (req, res) =>{

    const gatos = {
        nome: "Julia",
        idade: 2,
        dono: "Jonathan"
    }


    res.render('gatos', {gato: gatos})
})

app.listen(port, () => {
    console.log(`projeto rodando na porta ${port}`);
})