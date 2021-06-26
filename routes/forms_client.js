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
                        output: 'Muito bem! A entrega via delivery é uma das melhores formas de garantir um bom atendimento do seu cliente. Continue utilizando os aplicativos e certifique-se de sempre checar se a experiência do seu cliente ao receber a encomenda está boa e em que pontos pode fazer melhorias.'
                        
        
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'Utilizar os serviços  de delivery garante que você aumente o número de clientes pois você passa a atender um perímetro muito maior de pessoas, principalmente as que estão fora do seu bairro. Além disso, você pode diminuir custos do seu restaurante ao realizar apenas entregas via delivery e não ter lugar físico para as refeições, por exemplo. Também, mesmo em dias em que você tiver baixo movimento, ainda é possível realizar vendas, até porque você pode criar anúncios online em redes sociais e que são de baixo custo. Caso você tenha alguma dúvida sobre como registrar seu restaurante em algum aplicativo consulte os sites das empresas pois você encontrará um passo a passo.'
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
                        output: 'Que legal! É muito bom saber que a grande maioria dos seus clientes está voltando a comprar de você. Isso mostra que tem um bom atendimento e garante uma boa experiência do cliente. Para aumentar ainda mais a sua porcentagem lembre-se sempre de realizar pesquisas para verificar o motivo dos seus clientes terem ficado felizes ou tristes com seu atendimento ou com a comida de seu restaurante. Essa pesquisa você pode fazer utilizando o Google Formulario que é gratuito, ou até mesmo imprimir algumas perguntas em um papel e que seja depositado em uma urna após respondido.'
                    },
                    {
                        label: 'Uma quantidade razoável (de 50% a 75%) dos meus clientes voltam a comprar de mim.',
                        value: '1.5',
                        output: 'Provavelmente você está tendo algum problema com experiência do cliente! Você precisa buscar entender o motivo de alguns clientes não voltarem a comprar de você. Pontos importantes para serem investigados são se o seu cliente: gosta do seu cardápio e da comida, gosta do local, o ambiente é bom para fazer refeições, o restaurante é organizado, o atendimento é bom, tem entrega por delivery, a entrega demorar muito ou pouco para chegar. Para isso faça uma pesquisa utilizando o Google Formulario que é gratuito, ou até mesmo imprimir algumas perguntas em um papel e que seja depositado em uma urna após respondido.'
                    },
                    {
                        label: 'Poucos clientes (de 30% a 50%) voltam a comprar de mim.',
                        value: '1.0',
                        output: 'Isso não é muito bom! Se pouco dos seus clientes voltam a comprar de você significa que algo não está os agradando. Pontos importantes para serem investigados são se o seu cliente: gosta do seu cardápio e da comida, gosta do local, o ambiente é bom para fazer refeições, o restaurante é organizado, o atendimento é bom, tem entrega por delivery, a entrega demorar muito ou pouco para chegar. Para isso faça uma pesquisa utilizando o Google Formulario que é gratuito, ou até mesmo imprimir algumas perguntas em um papel e que seja depositado em uma urna após respondido.'
                    },
                    {
                        label: 'Muito pouco clientes (menos de 30%) voltam a comprar de mim',
                        value: '0.5',
                        output: 'Provavelmente você está tendo um problema sério de experiência e satisfação do cliente. Muitos não voltam a comprar de você pois não gostaram de algo, por isso você precisa que alguns pontos importantes sejam investigados sobre o seu cliente: gosta do seu cardápio e da comida, gosta do local, o ambiente é bom para fazer refeições, o restaurante é organizado, o atendimento é bom, tem entrega por delivery, a entrega demorar muito ou pouco para chegar. Para isso faça uma pesquisa utilizando o Google Formulario que é gratuito, ou até mesmo imprimir algumas perguntas em um papel e que seja depositado em uma urna após respondido. Também, lembre-se de adicionar perguntas que você considera importantes.'
                    },
                    {
                        label: 'Eu sei que tenho clientes que voltam mas não tenho noção da quantidade de clientes que voltam.',
                        value: '0.25',
                        output: 'Saber quantos dos seus clientes voltam é uma maneira de você saber se o seu negócio tem ido bem ou não. Se você tem bastante clientes voltando a comprar significa que eles gostam do seu restaurante e da sua comida, mas se eles não voltam tem algum problema! É importante corrigir pois isso garante que o seu restaurante se mantenha bem financeiramente e fazendo sempre cada vez mais vendas. Atualmente já existem ótimos softwares para que você torne esse processo automatizado, basta realizar uma boa pesquisa no google que você encontrará ótimas soluções para seu restaurante.'
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



