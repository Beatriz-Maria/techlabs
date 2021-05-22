'use strict';

//Acrescentar isso
//var mysql = require('mysql');
//var connection  = require('./lib/db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const forms = require('/enviar_forms.html')

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const app = express();
app.use(express.static("public"))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  
});

// Rota para a página de formulário para responder//
app.get("/formulario", function(req, res){
  res.sendFile(path.join(__dirname, "/forms.html"));
})

//Rota para o botão de enviar do formulário//
app.post('/enviar_formulario', function(req, res){
  // Usar a variavel req para pegar as informações enviadas pelo formulário
  // Montar o sql para inserir os dados no Mysql ... INSERT etc
  // Montar o algoritmo de ifs para dar as respostas necessárias e guardar na variável output (javascript)
  // 
  res.render('/enviar_forms.html') 
} )

//Rota para o botão de enviar conectada com banco de dados
//app.post("/enviar_forms.html", function (req, res){
  //forms.create({//O QUE EU QUERO MOSTRAR//})
  //})


app.listen(PORT);
console.log('Running on http://localhost:' + PORT)})
