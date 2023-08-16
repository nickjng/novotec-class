const express = require("express"); // importando o modulo express
const app = express(); // colocando as func do express na var app
const port = 8080; // falando a porta que vai rodar o servidor
const path = require("path") // importando o core modules path
const basePath = path.join(__dirname, "templates") //pegando o "caminho" até a pasta templates
// no caso esse caminho
//basePath --> desktop/novotec/nickolas/novotec-class/node.js/express/templates

//* (req, res) =>{} é uma função anonima



    app.get("/gatos/:nome", (req, res) =>{
        const nome = req.params.nome;

        console.log(`O nome do gato é ${nome}`);

        res.sendFile(`${basePath}/gato.html`)
    })

app.get("/", (req, res) =>{
    res.sendFile(`${basePath}/home.html`)
}) // enviando o arquivo home.html para a url "/"

app.listen(port, () =>{
    console.log(`Rodando servidor na porta ${port}`);
}) // lendo a porta, e rodando a aplicação nessa porta