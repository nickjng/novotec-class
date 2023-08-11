const path = require("path");
const fs = require("fs")

fs.writeFile("ola.html", "node.js", () =>{
    console.log("Arquivo criado");
} )




console.log(path.dirname("node.js/fundamentos/ola.html"));
console.log(path.basename("./ola.html"));
console.log(path.extname("./ola.html"));

