const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000;

const app = express()

app.engine('handlebars', exphbs.engine())

app.use(express.static('public'))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const auth = false;

    res.render('home', { auth })
})

app.get('/musicas', (req, res) => {
    const musics = [
        {
            titulo: "Carrosel",
            categoria: "rock",
            banda: "Iron Maiden"
        },
        {
            titulo: "Batendo na porta",
            categoria: "rock",
            banda: "Guns N Roses"
        },
        {
            titulo: "Pinguin",
            categoria: "ensino",
            banda: "bla bla bla"
        },
        {
            titulo: "Gato",
            categoria: "ensino",
            banda: "bla bla bla"
        }]

    res.render('blog', { musics })
})

app.get('/gatos', (req, res) => {

    const gatos = [
        {
            nome: "Mingual",
            idade: 2,
            dono: "Nickolas"
        },

        {
            nome: "Jorge",
            idade: 2,
            dono: "Nathan"
        },

        {
            nome: "Saquinho",
            idade: 2,
            dono: "Apollo"
        },

        {
            nome: "Sem rabo",
            idade: 2,
            dono: "MIguel"
        },

        {
            nome: "Julia",
            idade: 2,
            dono: "Jonathan"
        },

    ]



    res.render('gatos', { gatos })
})

app.listen(port, () => {
    console.log(`projeto rodando na porta ${port}`);
})