const express = require('express') // importando modulo express
const exphbs = require('express-handlebars') // importando modulo do handlebars
const port = 3000; // definindo porta

const app = express() 

const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

app.engine('handlebars', hbs.engine) 
app.set('view engine', 'handlebars')

app.use(express.static('public')) // renderizar css


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