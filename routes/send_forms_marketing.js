const express = require('express');
const router = express.Router();
const connection = require('../db');

/* GET forms_marketing page. */
router.get('/', function(req, res, next) {
    res.render('forms_marketing', { title: 'forms_client' });
});

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('redes_sociais', 'Answer is required').notEmpty()
    req.assert('publicidade', 'Answer is required').notEmpty()
    req.assert('identidade_visual', 'Answer is required').notEmpty()
    req.assert('diferencial_negocio', 'Answer is required').notEmpty()
    req.assert('publico_alvo', 'Answer is required').notEmpty() 
    req.assert('motivacao', 'Answer is required').notEmpty()
   
    let errors = req.validationErrors()
    if (errors) {
        throw 'Erro de validação'
    }
})

module.exports = router;
