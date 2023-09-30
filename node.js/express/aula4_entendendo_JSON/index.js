const express = require("express"); // importando o modulo express
const app = express(); // colocando as func do express na var app
const port = 8080; // falando a porta que vai rodar o servidor
const path = require("path") // importando o core modules path
const basePath = path.join(__dirname, "templates") //pegando o "caminho" até a pasta templates

const gato = require("./gatos") // importando modulo/rota gatos


app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json());

app.use(express.static('public'))

app.use("/gatos", gato)

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`)
}) // enviando o arquivo home.html para a url "/"


app.use((req, res) =>{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`Rodando servidor na porta ${port}`);
}) // lendo a porta, e rodando a aplicação nessa porta