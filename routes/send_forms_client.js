const express = require('express');
const router = express.Router();
const connection = require('../db');

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    req.assert('delivery', 'Answer is required').notEmpty()
    req.assert('volta_clientes', 'Answer is required').notEmpty()
    req.assert('motivo_volta_clientes', 'Answer is required').notEmpty()
    req.assert('nps', 'Answer is required').notEmpty()
    req.assert('vem_clientes', 'Answer is required').notEmpty()

    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }
})

module.exports = router;