const express = require("express"); // importando o modulo express
const router = express.Router(); // colocando as func do express na var app
const path = require("path") // importando o core modules path
const basePath = path.join(__dirname, "../templates") //pegando o "caminho" até a pasta templates

    router.get("/cadastrar", (req, res) =>{
        res.sendFile(`${basePath}/cadastrarGatos.html`)
    })

    router.post("/salvar", (req, res) =>{
        console.log(req.body);
    })


    router.get("/:nome", (req, res) =>{
        const nome = req.params.nome;

        console.log(`O nome do gato é ${nome}`);

        res.sendFile(`${basePath}/gato.html`)
    })

module.exports = router;