const express = require('express'); 
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();

//BODY
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']  
})

// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.get('/', (req, res) =>{

    res.render('home') 

})

app.use( (req, res) => {
    res.status(404).render("404");
})

app.listen(port, () =>{
    console.log("Projeto funcionando, acesse localhost:"+port);
})
