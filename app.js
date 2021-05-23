'use strict';

var mysql = require('mysql');
var connection  = require('./db');

const express = require('express');
var router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')
//const res = require('/enviar_forms.html')
//const res = require('/enviar_formulario')
const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


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
    req.assert('tempo_negocio', 'Answer is required').notEmpty()
    req.assert('num_funcionarios', 'Answer is required').notEmpty()
    req.assert('entrega_app', 'Answer is required').notEmpty()
    req.assert('num_volta_clientes', 'Answer is required').notEmpty()
    req.assert('ticket_medio', 'Answer is required').notEmpty()
    req.assert('custos_medios_mensais', 'Answer is required').notEmpty()
    req.assert('lucro', 'Answer is required').notEmpty()

    var errors = req.validationErrors()

    var errors = req.validationErrors()
    connection.query('INSERT INTO input (tempo_negocio, num_funcionários, entrega_app, num_volta_clientes, ticket_medio, custos_medios_mensais, lucro) values (tempo_negocio, num_funcionários, entrega_app, num_volta_clientes, ticket_medio, custos_medios_mensais, lucro)', user, function(err, result) 

{
      //if(err) throw err
                if (err) {
                    req.flash('error', err)

                    // render to views/user/add.ejs
                    res.render('/forms.html', {
                        //title: 'Add New Customer',
                        //name: user.name,
                        //email: user.email                    
                    })
                } else {    req.flash('success', 'Data added successfully!');
                res.redirect('/enviar_forms.html');
            }
        })

 
    
    // Montar o sql para inserir os dados no Mysql ... INSERT etc
    // Montar o algoritmo de ifs para dar as respostas necessárias e guardar na variável output (javascript)
    // 
    
  
  //Rota para o botão de enviar conectada com banco de dados
  //app.post("/enviar_forms.html", function (req, re

app.listen(PORT);
console.log('Running on http://localhost:' + PORT)})
