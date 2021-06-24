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
            {
           
                question: 'Qual o tamanho do seu cardápio?',
                name: 'tam_cardapio',
                options: [
                    {
                        label: 'Grande, acima de 20 itens',
                        value: '0.5',
                        output: 'output_3_0.5'
                    },
                    {
                        label: 'Médio, até 20 itens',
                        value: '1.0',
                        output: 'output_3_1.0'
                    },
                    {
                        label: 'Pequeno, até 10 itens',
                        value: '1.5',
                        output: 'output_3_1.5'
                    }
                    
                ]
            },
            {
           
                question: 'Quantos clientes compram por semana?',
                name: 'compra_semana',
                options: [
                    {
                        label: 'Até 20 pessoas',
                        value: '0.25',
                        output: 'output_4_0.25'
                    },
                    {
                        label: 'Entre 21 a 50 pessoas',
                        value: '0.5',
                        output: 'output_4_0.5'
                    },
                    {
                        label: 'Entre 51 a 80 pessoas',
                        value: '0.75',
                        output: 'output_4_0.75'
                    },
                    {
                        label: 'Entre 81 a 120 pessoas',
                        value: '1.0',
                        output: 'output_4_1.0'
                    },
                    {
                        label: 'Entre 121 a 200 pessoas',
                        value: '1.25',
                        output: 'output_4_1.25'
                    },
                    {
                        label: 'Acima de 200 pessoas',
                        value: '1.25',
                        output: 'output_4_1.25'
                    }
                ]
            },
            {
           
                question: 'Sobra um dinheirinho para reinvestir no negócio?',
                name: 'din_reinvestir',
                options: [
                    {
                        label: 'Na maioria dos meses sim',
                        value: '1.5',
                        output: 'output_5_1.5'
                    },
                    {
                        label: 'É difícil sobrar o suficiente para reinvestir, mas eu tento guardar',
                        value: '0.5',
                        output: 'output_5_0.5'
                    },
                    
                ]
            },
            {
           
                question: 'Tem outras unidades e/ou pretende expandir?',
                name: 'pretende_expandir',
                options: [
                    {
                        label: 'Sim',
                        value: '1.4',
                        output: 'output_6_1.4'
                    },
                    {
                        label: 'Não',
                        value: '0.4',
                        output: 'output_6_0.4'
                    },
                ]                    
            },
            {
           
                question: 'Possui as licenças necessárias para funcionar? (Vigilância sanitária, bombeiros, etc)',
                name: 'licenca_necessaria',
                options: [
                    {
                        label: 'Sim',
                        value: '1.5',
                        output: 'output_7_1.5'
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'output_7_0.5'
                    },                    
                ]
            },
        ]
    }
    res.render('forms', data);
})

module.exports = router;