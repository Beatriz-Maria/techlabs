const express = require('express');
const router = express.Router();

/* GET forms_client page. */
router.get('/', function (req, res) {
    let data = {
        title: 'forms_client',
        questions: [
            {
                question: 'O restaurante realiza entrega via aplicativo delivery?',
                name: 'delivery',
                options: [
                    {
                        label: 'Sim',
                        value: '2.0',
                        output: 'output_21_2.0'
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'output_21_0.5'
                    }                                        
                ]
            },
            {
                question: 'Quantos clientes voltam a comprar do seu restaurante?',
                name: 'volta_clientes',
                options: [
                    {
                        label: 'A grande maioria (mais de 75%) dos meus clientes voltam a comprar de mim.',
                        value: '2.0',
                        output: 'output_22_2.0'
                    },
                    {
                        label: 'Uma quantidade razoável (de 50% a 75%) dos meus clientes voltam a comprar de mim.',
                        value: '1.5',
                        output: 'output_22_1.5'
                    },
                    {
                        label: 'Poucos clientes (de 30% a 50%) voltam a comprar de mim.',
                        value: '1.0',
                        output: 'output_22_1.0'
                    },
                    {
                        label: 'Muito pouco clientes (menos de 30%) voltam a comprar de mim',
                        value: '0.5',
                        output: 'output_22_0.5'
                    },
                    {
                        label: 'Eu sei que tenho clientes que voltam mas não tenho noção da quantidade de clientes que voltam.',
                        value: '0.25',
                        output: 'output_22_0.25'
                    },
                    
                ]
            },
            {
                question: 'Qual é o principal motivo para os clientes voltarem?',
                name: 'motivo_volta_clientes',
                options: [
                    {
                        label: 'Não sei',
                        value: '0.25',
                        output: 'output_23_0.25'
                    },
                    {
                        label: 'A comida do meu estabelecimento.',
                        value: '1.0',
                        output: 'output_23_1.0'
                    },
                    {
                        label: 'O ambiente do meu estabelecimento.',
                        value: '1.0',
                        output: 'output_23_1.0'
                    },
                    {
                        label: 'Tanto a comida como o ambiente que eu ofereço no meu estabelecimento.',
                        value: '2.0',
                        output: 'output_23_2.0'
                    }                    
                ]
            },
            {
                question: 'Você mede o nível de satisfação?',
                name: 'nps',
                options: [
                    {
                        label: 'Temos sim um formulário de pesquisa de satisfação (papel, tablet etc) e muitos clientes preenchem.',
                        value: '2.0',
                        output: 'output_24_2.0',
                    },
                    {
                        label: 'Temos sim um formulário de pesquisa de satisfação (papel, tablet etc) mas só poucos clientes preenchem.',
                        value: '1.75',
                        output: 'output_24_1.75',
                    },
                    {
                        label: 'Na maioria das vezes eu vou passando pelos clientes e aproveito para perguntar se ele ficou satisfeito com a comida/serviço.',
                        value: '1.5',
                        output: 'output_24_1.5',
                    },
                    {
                        label: 'Às vezes, quando eu lembro, vou passando pelos clientes e aproveito para perguntar se ele ficou satisfeito com a comida/serviço.',
                        value: '1.25',
                        output: 'output_24_1.25'
                    },
                    {
                        label: 'Na maioria das vezes eu pergunto para o cliente se ele ficou satisfeito com a comida/serviço só na hora dele pagar.',
                        value: '1',
                        output: 'output_24_1.0'
                    },
                    {
                        label: 'Às vezes, quando eu lembro, pergunto para o cliente se ele ficou satisfeito com a comida/serviço só na hora dele pagar.',
                        value: '0.75',
                        output: 'output_24_0.75'
                    },
                    {
                        label: 'Não sei dizer.',
                        value: '0.25',
                        output: 'output_24_0.25'
                    },
                    
                ]
            },
            {
                question: 'Você sabe de onde vem seus clientes (aplicativos, bairros específicos...)?',
                name: 'vem_clientes',
                options: [
                    {
                        label: 'Sim, a maioria dos clientes.',
                        value: '2.0',
                        output: 'output_25_2.0'
                    },
                    {
                        label: 'Só sei de alguns clientes',
                        value: '1.25',
                        output: 'output_25_1.25'
                    },
                    {
                        label: 'Sei de bem poucos clientes.',
                        value: '0.75',
                        output: 'output_25_0.75'
                    },
                                        
                ]
            },
        ]
    }
    res.render('forms_client', data);
})

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    req.assert('delivery', 'Answer is required').notEmpty()
    req.assert('volta_clientes', 'Answer is required').notEmpty()
    req.assert('motivo_volta_clientes', 'Answer is required').notEmpty()
    req.assert('nps', 'Answer is required').notEmpty()
    req.assert('vem_clientes', 'Answer is required').notEmpty()

    // let errors = req.validationErrors()
    // if (errors) {
    //     throw 'Erro de validação'
    // }
    let data = {
        title: 'Deu certo',
    }
    res.render('forms_client', data);
})

module.exports = router;



