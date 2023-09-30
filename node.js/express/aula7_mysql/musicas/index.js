const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars')
const pool = require('../db/conn')
const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// ----------- endpoints --------------
router.get("/cadastrar", (req, res) => {
    res.render("cadastrarMusica")
})


router.post("/salvar", (req, res) => {
    const nome = req.body.nome;
    const artista = req.body.artista
    const tipo = req.body.tipo;

    const sql = `insert into musica (??, ??, ??)
                values (?,?,?);`

    const data = ['nome', nome, 'artista', artista, 'tipo', tipo]


    pool.query(sql, data)


    res.redirect('/')

})

router.post('/deletar/:id', (req, res) => {
    const id = req.params.id;
    const sql = `delete from musica where ?? = ?`
    const data = ['id', id]
    pool.query(sql, data)

    res.redirect('/')
})


router.get('/atualizacao/:id', (req, res) => {
    const id = req.params.id;
    const sql = `select * from musica where ?? = ?`
    const data = ['id', id]
    pool.query(sql, data, (err, data) => {
        const choicedMusic = data[0]
        err? console.log(err) : res.render('update', {choicedMusic})
    })
})

router.post('/atualizar/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const artista = req.body.artista;
    const tipo = req.body.tipo;

    const sql = `update musica set ?? = ?, ?? = ?,
                 ?? = ? where ?? = ?;`

    const data = ['nome', nome,'artista', artista, 'tipo', tipo, 'id', id]

     pool.query(sql, data, (err)=>{
        err? console.log(err) : res.redirect('/'); 
     })

     

})



module.exports = router;