const express = require('express');
const router = express.Router();

/* GET formulario page. */
router.get('/', function (req, res) {
    let data = {
        title: 'OI Techies!',
        questions: [
            {
                question: 'Há quanto tempo seu negócio existe',
                name: 'tempo_negocio',
                options: [
                    {
                        label: 'Estou planejando e não abri o meu nogócio',
                        value: '0'
                    },
                    {
                        label: 'De 0 até 6 meses',
                        value: '1'
                    }
                ]
            }
        ]
    }
    res.render('forms', data);
})

module.exports = router;