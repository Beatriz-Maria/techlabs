const express = require('express');
const router = express.Router();
const connection = require('../db');

/* GET forms_management page. */
router.get('/', function(req, res, next) {
    res.render('forms_management', { title: 'forms_client' });
});

/* POST forms_management page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('tempo_negocio', 'Answer is required').notEmpty()
    req.assert('num_funcionarios', 'Answer is required').notEmpty()
    req.assert('tam_cardapio', 'Answer is required').notEmpty()
    req.assert('compra_semana', 'Answer is required').notEmpty()
    req.assert('din_reinvestir', 'Answer is required').notEmpty()
    req.assert('pretende_expandir', 'Answer is required').notEmpty()
    req.assert('licenca_necessaria', 'Answer is required').notEmpty()
    
    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }
})

module.exports = router;
