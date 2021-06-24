const express = require('express');
const router = express.Router();
const connection = require('../db');

/* GET forms_finance page. */
router.get('/', function(req, res, next) {
    res.render('forms_finance', { title: 'forms_client' });
});

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    req.assert('ticket_medio', 'Answer is required').notEmpty()
    req.assert('custos_medios_mensais', 'Answer is required').notEmpty()
    req.assert('margem_lucro', 'Answer is required').notEmpty()
    req.assert('fluxo_caixa', 'Answer is required').notEmpty()
    req.assert('controle_estoque', 'Answer is required').notEmpty()
    req.assert('contabilidade_imposto', 'Answer is required').notEmpty()
    req.assert('custos_variaveis', 'Answer is required').notEmpty()

    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }
})

module.exports = router;
