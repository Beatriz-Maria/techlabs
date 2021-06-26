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
                        value: '0.25',
                        output: 'Ei, ticket médio é importante para saber qual o valor médio que cada cliente gasta. Isso te ajuda com a gestão financeira. Que tal aproveitar e aprender mais indicadores que vão te ajudar?'
                    },
                    {
                        label: 'Eu sei o que é ticket médio, mas eu não faço essas contas.',
                        value: '0.75',
                        output: 'Ei, ticket médio é importante para saber qual o valor médio que cada cliente gasta. Isso te ajuda com a gestão financeira. Que tal aproveitar e colocar isso no dia a dia para acompanhar?'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mais barato',
                        value: '1',
                        output: 'Que demais! Sobre o ticket médio, que tal criar uma promoção com seus itens mais caros e aumentar seu ticket médio e é claro também fazer novos clientes.'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mediano.',
                        value: '1.3',
                        output: 'Excelente! Sobre o ticket médio, que tal criar uma promoção com seus itens mais caros e aumentar seu ticket médio e é claro também fazer novos clientes.'
                    },
                    {
                        label: 'Meu ticket médio é próximo do valor do meu item mais caro.',
                        value: '1.6',
                        output: 'Excelente! Sobre o ticket médio, que tal criar uma promoção com esses itens mais vendidos e aumentar a clientela e é claro, aumentaando seu faturamento?'
                    },

                ]
            },
            {
                question: 'Quais são seus custos médios mensais?',
                name: 'custos_medios_mensais',
                options: [
                    {
                        label: 'Eu não sei o que é custo médio.',
                        value: '0.25',
                        output: 'Ei, custo médio é importante para saber qual o custo aproximado que você gasta com item do seu cardápio. Isso te ajuda com a gestão financeira. Que tal aproveitar e aprender mais indicadores que vão te ajudar?'
                    },
                    {
                        label: 'Eu sei o que é custo médio mas eu não faço controle das contas.',
                        value: '0.75',
                        output: 'Ei, custo médio é importante para saber qual o custo aproximado que você gasta com item do seu cardápio. Isso te ajuda com a gestão financeira. Que tal aproveitar e colocar isso no dia a dia para acompanhar?'
                    },
                    {
                        label: 'O custo médio é próximo de 90% do meu item mais vendido.',
                        value: '1.0',
                        output: 'Sobre o custo médio, cuidado! Se tal avaliar com mais cuidado seus insumos e encontrar uma maneira de economizar? Ou reconsiderar aumentar o preço de venda dos seus itens?'
                    },
                    {
                        label: 'O custo médio é próximo de 60% do meu item mais vendido.',
                        value: '1.3',
                        output: 'Sobre o custo médio, cuidado! Se tal avaliar com mais cuidado seus insumos e encontrar uma maneira de economizar? Ou reconsiderar aumentar o preço de venda dos seus itens?'
                    },
                    {
                        label: 'O custo médio é próximo de 30% do meu item mais vendido.',
                        value: '1.6',
                        output: 'Sobre o custo médio, excelente! Mas se você está abrindo mão da qualidade dos seus produtos, que tal reconsiderar também aumentar a qualidade e consequentemente o preço de venda?'
                    }
                ]
            },
            {
                question: 'Qual é sua margem de lucro?',
                name: 'margem_lucro',
                options: [
                    {
                        label: 'Eu não sei o que é margem de lucro?',
                        value: '0.25',
                        output: 'A margem de lucro é um percentual que indica o quanto o seu negócio está sendo lucrativo. Não é porque que está entrando mais receita que você está tendo mais lucro. Isso te ajuda com a gestão financeira. Que tal aproveitar e aprender mais indicadores que vão te ajudar?'
                    },
                    {
                        label: 'Eu sei o que é margem de lucro mas eu não faço controle das contas.',
                        value: '0.75',
                        output: 'A margem de lucro é um percentual que indica o quanto o seu negócio está sendo lucrativo. Não é porque que está entrando mais receita que você está tendo mais lucro. Isso te ajuda com a gestão financeira. Que tal aproveitar e aprender mais indicadores que vão te ajudar?'
                    },
                    {
                        label: 'A margem de lucro médio é próximo de 30% do meu item mais vendido.',
                        value: '1.0',
                        output: 'Você está operando com uma margem de lucro baixa, cuidado! Que tal avaliar com mais cuidado seus insumos e encontrar uma maneira de economizar? Reconsidere aumentar o preço de venda dos seus itens e aumentar sua amrgem de lucro?'
                    },
                    {
                        label: 'A margem de lucro médio é próximo de 60% do meu item mais vendido',
                        value: '1.3',
                        output: 'Você está operando com uma margem de lucro bacana, parabéns! Que tal investir em publicidade e aumentar a sua clientela de modo que não afete muito a sua margem de lucro?'
                    },
                    {
                        label: 'A margem de lucro médio é próximo de 90% do meu item mais vendido',
                        value: '1.6',
                        output: 'Você está operando com uma margem de lucro bacana, parabéns! Que tal investir em publicidade e aumentar a sua clientela?'
                    }
                ]
            },
            {
                question: 'Você faz fluxo de caixa?',
                name: 'fluxo_caixa',
                options: [
                    {
                        label: 'Sim, todo dia.',
                        value: '1.85',
                        output: 'Que demais que você consegue fazer fluxo de caixa todo isso. Isso é o essencial para ter o controle das finanças. Continue assim! Você também tira um tempo para calcular os indicadores como ticket médio, custo médio e margem de lucro?'
                    },
                    {
                        label: 'Sim, na maioria das vezes.',
                        value: '1.25',
                        output: 'Que demais que você consegue fazer fluxo de caixa na maioria das vezes, mas é importante que você faça isso todo dia. Isso é o essencial para ter o controle das finanças. Você também tira um tempo para calcular os indicadores como ticket médio, custo médio e margem de lucro?'
                    },
                    {
                        label: 'Quase nunca.',
                        value: '0.75',
                        output: 'É perigoso operar sem fazer o fluxo de caixa. Fazer o fluxo de caixa é é o essencial para ter o controle das finanças. E já aproveite para calcular os indicadores como ticket médio, custo médio e margem de lucro.'
                    },
                    {
                        label: 'Não sei o que é fluxo de caixa.',
                        value: '0.25',
                        output: 'Fluxo de caixa é um o movimento de entradas e saídas do dinheiro do caixa da empresa. Em palavras simples, você vê o quanto entrou de receita e o quanto saiu para pagamento de contas. Fazer fluxo de caixa é essencial para manter a saúde financeira do seu negócio.'
                    }
                ]
            },
            {
                question: 'Você faz controle de estoque?',
                name: 'controle_estoque',
                options: [
                    {
                        label: 'Sim, todo dia.',
                        value: '1.6',
                        output: 'É ótimo que você faça o controle de estoque todo dia. Continue assim! Perceber que faltou um insumo no meio do expediente atrapalha muito o seu dia a dia, sem contar outras situações complicadas. Conhecendo seu estoque você poderá comprar a quantidade certa, negociar o melhor preço possível e evitar o desperdício, assim obtendo mais lucros no seu negócio.'
                    },
                    {
                        label: 'Sim, até 2 vezes por semana.',
                        value: '1.2',
                        output: 'Que bom que você faz o controle do seu estoque. Mas que tal aumentar essa frequência. Perceber que faltou um insumo no meio do expediente atrapalha muito o seu dia a dia, sem contar outras situações complicadas. Conhecendo seu estoque você poderá comprar a quantidade certa, negociar o melhor preço possível e evitar o desperdício, assim obtendo mais lucros no seu negócio.'
                    },
                    {
                        label: 'Na maioria das vezes não, sempre tenho que correr atrás de alguma coisa na última hora.',
                        value: '0.5',
                        output: 'Fazer o controle do estoque é o ponto chave para a gestão do seu negócio como um todo. Perceber que faltou um insumo no meio do expediente atrapalha muito o seu dia a dia, sem contar outras situações complicadas. Conhecendo seu estoque você poderá comprar a quantidade certa, negociar o melhor preço possível e evitar o desperdício, assim obtendo mais lucros no seu negócio.'
                    }
                ]
            },
            {
                question: 'A contabilidade e impostos do seu restaurante estão em dia?',
                name: 'contabilidade_imposto',
                options: [
                    {
                        label: 'Sim',
                        value: '1.75',
                        output: 'Excelente que a contabilidade e os impostos estão em dia. Se você pensa na expansão, isso será muito bom pois é um empecilho a menos para se preocupar.'
                    },
                    {
                        label: 'Não',
                        value: '0.75',
                        output: 'Cuidado para não ficar com a contabilidade e os impostos muito atrasados. Colocar tudo isso em dia vai ser cada vez pior conforme o tempo vai passando. Se você pensa na expansão do seu negócio, em buscar mais investimento, a contabilidade e os impostos pode ser um grande problema.'
                    }
                ]
            }
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
        