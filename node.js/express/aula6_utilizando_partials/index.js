const express = require('express'); // importando modulo express
const port = 3000;
const exphbs = require('express-handlebars') // importando modulo handlebars
const app = express();
const mysql  = require('mysql')

const musicas = require('./musicas') // importando modulo interno musicas

//BODY
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
// importar JSON
app.use(express.json());



const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))


// utilizar rotas/caminhos do modulo musicas
app.use("/musicas", musicas);

// vetor de musicas
const songs = [
    {
        id: 1,
        nome: "When You're Gone",
        artista: "Avril Lavigne",
        tipo: "Rock"
    }, 
    {

        id:2,
        nome: "Demons",
        artista: "Imagine Dragons",
        tipo: "Rock"
    },
    {
        id:3,
        nome: "is This Love",
        artista: "Bob Marley",
        tipo: "Reggae"
    },
    {
        id:4,
        nome: "Runaway",
        artista: "AURORA",
        tipo: "Indie"
    },
    {
        id:5,
        nome: "Master of Puppets",
        artista: "Metalica",
        tipo: "Rock"
    },
    {
        id:6,
        nome: "How you like that",
        artista: "BLACKPINK",
        tipo: "Kpop"
    },
    {
        id:7,
        nome: "Crawling",
        artista: "Linkin Park",
        tipo: "Rock"
    }

]

app.get('/', (req, res) =>{
    res.render('home', {songs})
})

app.get('/musicas/:id', (req, res) => {
    const musicaSelecionada = songs[parseInt(req.params.id) - 1];

    res.render("musica", {choicedMusic: musicaSelecionada});
})


app.use( (req, res) => {
    res.status(404).render("404");
})

app.listen(port, () =>{
    console.log("Projeto funcionando, acesse localhost:"+port);
})
