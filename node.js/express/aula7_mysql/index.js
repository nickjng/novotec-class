const express = require('express'); // importando modulo express
const port = 3000;
const exphbs = require('express-handlebars') // importando modulo handlebars
const app = express();
const pool = require('./db/conn')
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

app.get('/', (req, res) =>{

    const sql = 'select * from musica'

    pool.query(sql, (err, data)=>{
        err? console.log(err) : res.render('home', {songs: data}) 
    })

})

app.get('/musicas/:id', (req, res) => {
    const id = req.params.id;
    const sql = `select * from musica where id = ${id}`

    pool.query(sql, (err, data)=>{
        const choicedMusic = data[0]
        err? console.log(err) : res.render('musica', {choicedMusic}) 
    })

})

app.use( (req, res) => {
    res.status(404).render("404");
})

app.listen(port, () =>{
    console.log("Projeto funcionando, acesse localhost:"+port);
})
