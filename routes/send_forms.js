const express = require('express');
const router = express.Router();
const connection = require('../db');

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('tempo_negocio', 'Answer is required').notEmpty()
    req.assert('num_funcionarios', 'Answer is required').notEmpty()
    req.assert('entrega_app', 'Answer is required').notEmpty()
    req.assert('num_volta_clientes', 'Answer is required').notEmpty()
    req.assert('ticket_medio', 'Answer is required').notEmpty()
    req.assert('custos_medios_mensais', 'Answer is required').notEmpty()
    req.assert('lucro', 'Answer is required').notEmpty()

    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }

    let input = {
        tempo_negocio: req.body.tempo_negocio,
        num_funcionarios: req.body.num_funcionarios
        date: new Date()
    }
    connection.query(
        'INSERT INTO input SET ?',
        input,
        function (err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)

                // render to views/user/add.ejs
                res.render('/forms.html', {
                    //title: 'Add New Customer',
                    //name: user.name,
                    //email: user.email
                })
            } else {
                req.flash('success', 'Data added successfully!');
                res.redirect('/enviar_forms.html');
            }
        })


    // Montar o sql para inserir os dados no Mysql ... INSERT etc
    // Montar o algoritmo de ifs para dar as respostas necessárias e guardar na variável output (javascript)
    //


})

module.exports = router;
