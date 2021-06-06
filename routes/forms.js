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
                        value: '0.25',
                        output: 'output_1_0.25'
                    },
                    {
                        label: 'De 0 até 6 meses',
                        value: '0.5',
                        output: 'output_1_0.5'
                    },
                    {
                        label: 'Mais de 6 meses até 1 ano',
                        value: '0.75',
                        output: 'output_1_0.75'
                    },
                    {
                        label: 'Mais de 1 ano até 1 ano e meio',
                        value: '0.9',
                        output: 'output_1_0.9'
                    },
                    {
                        label: 'Mais de 1 ano e meio até 2 anos',
                        value: '1.0',
                        output: 'output_1_1.0'
                    },
                    {
                        label: 'Mais de 2 anos até 5 anos',
                        value: '1.1',
                        output: 'output_1_1.1'
                    },
                    {
                        label: 'Mais de 5 anos até 10 anos',
                        value: '1.2',
                        output: 'output_1_1.2'
                    },
                    {
                        label: 'Mais de 10 anos',
                        value: '1.3',
                        output: 'output_1_1.3'
                    }
                    
                ]
            },

            {
           
                question: 'Quantos funcionários você possui hoje?',
                name: 'num_funcionarios',
                options: [
                    {
                        label: 'Até 2 funcionários',
                        value: '0.25',
                        output: 'output_2_0.25'
                    },
                    {
                        label: 'Até 5 funcionários',
                        value: '0.5',
                        output: 'output_2_0.5'
                    },
                    {
                        label: 'Até 8 funcionários',
                        value: '0.75',
                        output: 'output_2_0.75'
                    },
                    {
                        label: 'Até 10 funcionários',
                        value: '1.0',
                        output: 'output_2_1.0'
                    },
                    {
                        label: 'Mais de 10 funcionários',
                        value: '1.3',
                        output: 'output_2_1.3'
                    }
                ]

            },

        ]
    }
    res.render('forms', data);
})

module.exports = router;