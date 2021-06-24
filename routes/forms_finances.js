const express = require('express');
const router = express.Router();
const connection = require('../db');

/* GET forms_finance page. */
router.get('/', function (req, res) {
    let data = {
        title: 'forms_finance',
        questions: [
            {
                question: 'Qual é seu Ticket médio?',
                name: 'ticket_medio',
                options: [
                    {
                        label: 'Eu não sei o que é ticket médio',
                        value: '0.2',
                        output: 'output_8_0.2'
                    },
                    {
                        label: 'Eu sei o que é ticket médio, mas eu não faço essas contas.',
                        value: '0.5',
                        output: 'output_8_0.5'
                    },
                    {
                        label: 'Meu ticket médio é próximo do valor do meu item mais caro.',
                        value: '1',
                        output: 'output_8_1.0'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mais barato',
                        value: '1',
                        output: 'output_8_1.0'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mediano.',
                        value: '1.4',
                        output: 'output_8_1.4'
                    },

                ]
            },
            {
                question: 'Quais são seus custos médios mensais?',
                name: 'custos_medios_mensais',
                options: [
                    {
                        label: 'Eu não sei o que é custo médio.',
                        value: '0.2',
                        output: 'output_9_0.2'
                    },
                    {
                        label: 'Eu sei o que é custo médio mas eu não faço controle das contas.',
                        value: '0.5',
                        output: 'output_9_0.5'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mais caro.',
                        value: '1.0',
                        output: 'output_9_1.0'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mais barato.',
                        value: '1.0',
                        output: 'output_9_1.0'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mediano.',
                        value: '1.4',
                        output: 'output_9_1.4'
                    },

                ]
            },
            {
                question: 'Qual é sua margem de lucro?',
                name: 'margem_lucro',
                options: [
                    {
                        label: 'Eu não sei o que é margem de lucro?',
                        value: '0.2',
                        output: 'output_10_0.2'
                    },
                    {
                        label: 'Eu sei o que é margem de lucro mas eu não faço controle das contas.',
                        value: '0.5',
                        output: 'output_10_0.5'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mais caro.',
                        value: '1',
                        output: 'output_10_1.0'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mais barato.',
                        value: '1',
                        output: 'output_10_1.0'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mediano.',
                        value: '1.4',
                        output: 'output_10_1.4'
                    },

                ]
            },
            {
                question: 'Você faz fluxo de caixa?',
                name: 'fluxo_caixa',
                options: [
                    {
                        label: 'Sim, todo dia.',
                        value: '1.5',
                        output: 'output_11_1.5'
                    },
                    {
                        label: 'Sim, na maioria das vezes.',
                        value: '1.0',
                        output: 'output_11_1.0'
                    },
                    {
                        label: 'Quase nunca.',
                        value: '0.75',
                        output: 'output_11_0.75'
                    },
                    {
                        label: 'Não sei o que é fluxo de caixa.',
                        value: '0.25',
                        output: 'output_11_0.25'
                    },

                ]
            },
            {
                question: 'Você faz controle de estoque?',
                name: 'controle_estoque',
                options: [
                    {
                        label: 'Sim, todo dia',
                        value: '1.4',
                        output: 'output_12_1.4'
                    },
                    {
                        label: 'Sim, até 2 vezes por semana',
                        value: '1.0',
                        output: 'output_12_1.0'
                    },
                    {
                        label: 'Na maioria das vezes não, sempre tenho que correr atrás de alguma coisa na última hora.',
                        value: '0.4',
                        output: 'output_12_0.4'
                    },

                ]
            },
            {
                question: 'A contabilidade e impostos do seu restaurante estão em dia?',
                name: 'contabilidade_imposto',
                options: [
                    {
                        label: 'Sim',
                        value: '1.5',
                        output: 'output_13_1.5'
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'output_13_0.5'
                    },

                ]
            },
            {
                question: 'Você conhece os custos variáveis do negócio?',
                name: 'custos_variaveis',
                options: [
                    {
                        label: 'Sim',
                        value: '1.4',
                        output: 'output_14_1.4'
                    },
                    {
                        label: 'Não',
                        value: '0.4',
                        output: 'output_14_0.4'
                    },
                ]

            },
        ]
    }
    res.render('forms_finance', data);
})

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    req.assert('ticket_medio', 'Answer is required').notEmpty()
    req.assert('custos_medios_mensais', 'Answer is required').notEmpty()
    req.assert('margem_lucro', 'Answer is required').notEmpty()
    req.assert('fluxo_caixa', 'Answer is required').notEmpty()
    req.assert('controle_estoque', 'Answer is required').notEmpty()
    req.assert('contabilidade_imposto', 'Answer is required').notEmpty()
    req.assert('custos_variaveis', 'Answer is required').notEmpty()

    // let errors = req.validationErrors()
    // if (errors) {
    //     throw 'Erro de validação'
    // }
    let data = {
        title: 'deu certo'
    }
    res.render('forms_finance', data);
})

module.exports = router;
        