const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const app = express();

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bancodedados",
    database: "aulanode"
})

conn.connect((err) => {
    if (err) {
        console.log("deu ruim");
        console.log(err);
    }
    else {
        console.log("Conectado ao Banco de dados");
    }
})
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

    const sql = `insert into musica (nome, artista, tipo)
                values ('${nome}','${artista}','${tipo}');`


    conn.query(sql)


    res.redirect('/')

})

router.post('/deletar/:id', (req, res) => {
    const id = req.params.id;
    const sql = `delete from musica where id = ${id}`

    conn.query(sql)

    res.redirect('/')
})


router.get('/atualizacao/:id', (req, res) => {
    const id = req.params.id;
    const sql = `select * from musica where id = ${id}`

    conn.query(sql, (err, data) => {
        const choicedMusic = data[0]
        err? console.log(err) : res.render('update', {choicedMusic})
    })
})

router.post('/atualizar/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const artista = req.body.artista;
    const tipo = req.body.tipo;

    const sql = `update musica set nome = '${nome}', artista = '${artista}',
                 tipo = '${tipo}' where id = ${id};`

     conn.query(sql, (err)=>{
        err? console.log(err) : res.redirect('/'); 
     })

     

})



module.exports = router;