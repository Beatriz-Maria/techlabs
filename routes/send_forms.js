const express = require('express');
const router = express.Router();
const connection = require('../db');

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('tempo_negocio', 'Answer is required').notEmpty()
    req.assert('num_funcionarios', 'Answer is required').notEmpty()
    req.assert('tam_cardapio', 'Answer is required').notEmpty()
    req.assert('compra_semana', 'Answer is required').notEmpty()
    req.assert('din_reinvestir', 'Answer is required').notEmpty()
    req.assert('pretende_expandir', 'Answer is required').notEmpty()
    req.assert('licenca_necessaria', 'Answer is required').notEmpty()
    req.assert('ticket_medio', 'Answer is required').notEmpty()
    req.assert('custos_medios_mensais', 'Answer is required').notEmpty()
    req.assert('margem_lucro', 'Answer is required').notEmpty()
    req.assert('fluxo_caixa', 'Answer is required').notEmpty()
    req.assert('controle_estoque', 'Answer is required').notEmpty()
    req.assert('contabilidade_imposto', 'Answer is required').notEmpty()
    req.assert('custos_variaveis', 'Answer is required').notEmpty()
    req.assert('redes_sociais', 'Answer is required').notEmpty()
    req.assert('publicidade', 'Answer is required').notEmpty()
    req.assert('identidade_visual', 'Answer is required').notEmpty()
    req.assert('diferencial_negocio', 'Answer is required').notEmpty()
    req.assert('publico_alvo', 'Answer is required').notEmpty() 
    req.assert('motivacao', 'Answer is required').notEmpty()
    req.assert('delivery', 'Answer is required').notEmpty()
    req.assert('volta_clientes', 'Answer is required').notEmpty()
    req.assert('motivo_volta_clientes', 'Answer is required').notEmpty()
    req.assert('nps', 'Answer is required').notEmpty()
    req.assert('vem_clientes', 'Answer is required').notEmpty()

    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }

    //req.body é para pegar o dado que veio do formulário
    let input = {
        tempo_negocio: req.body.tempo_negocio,
        num_funcionarios: req.body.num_funcionarios
        //date: new Date()//
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
