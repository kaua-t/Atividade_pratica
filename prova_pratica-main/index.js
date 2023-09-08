const express = require('express')
const exphbs = require('express-handlebars')
const Pool = require('./db/conn.js')
const PORT = 4000
//Importar o módulo conn para as operações com o banco
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para arquivos estáticos
app.use(express.static('public'))

app.get('/', (request, response)=>{
  const sql = `SELECT FROM * books`
  

  return response.render('home')
})

app.get('/cadastro',(request,response)=>{
  const {nome,descri,preco,categ} = request.body 

  const sql = `INSERT INTO books('nome','descri','preco','categ') VALUES (${nome},${descri},${preco},${categ})`
  return response.render('cadastro')
})


app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

