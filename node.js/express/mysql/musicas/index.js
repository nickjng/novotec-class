const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars')
const mysql  = require('mysql')
const app = express();

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bancodedados",
    database: "aulanode"
})

conn.connect((err)=>{
    if(err){
        console.log("deu ruim");
        console.log(err);
    }
    else{
        console.log("Conectado ao Banco de dados");
    }
})
const hbs = exphbs.create({
    partialsDir: ['views/partials'] // --> Uso do Partials 
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// ----------- endpoints --------------
router.get("/cadastrar", (req, res) =>{
    res.render("cadastrarMusica")
})


router.post("/salvar", (req, res) =>{
    const nome = req.body.nome;
    const artista = req.body.artista
    const tipo = req.body.tipo;

    const sql = `insert into musica (nome, artista, tipo)
                values ('${nome}','${artista}','${tipo}');`


    conn.query(sql)
    console.log(req.body)

})



module.exports = router;