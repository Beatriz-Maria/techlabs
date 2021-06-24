const express = require('express');
const router = express.Router();

/* GET forms_marketing page. */
router.get('/', function (req, res) {
    let data = {
        title: 'forms_marketing',
        questions: [
            { 
                question: 'O restaurante tem uma presença constante nas redes sociais (Instagram, TikTok e Facebook)?',
                name: 'redes_sociais',
                options: [
                    {
                        label: 'Posto constantemente nas redes sociais',
                        value: '2.5',
                        output: 'output_15_2.5'
                    },
                    {
                        label: 'Apareço nas redes sociais apenas em eventos/datas especiais ',
                        value: '2.0',
                        output: 'output_15_2.0'
                    },
                    {
                        label: 'Uso bem pouco as redes sociais',
                        value: '1.5',
                        output: 'output_15_1.5'
                    },
                    {
                        label: 'Não uso rede social para o meu negócio',
                        value: '0.5',
                        output: 'output_15_0.5'
                    },
                                        
                ]
            },
            {
                question: 'Sabe utilizar o Facebook/Google/Instagram ads?',
                name: 'publicidade',
                options: [
                    {
                        label: 'Conheço e utilizo',
                        value: '1.25',
                        output: 'output_16_1.25'
                    },
                    {
                        label: 'Conheço, mas não utilizo',
                        value: '0.75',
                        output: 'output_16_0.75'
                    },
                    {
                        label: 'Não conheço',
                        value: '0.4',
                        output: 'output_16_0.4'
                    },
                                        
                ]
            },
            {
                question: 'Seu negócio possui uma identidade visual?',
                name: 'identidade_visual',
                options: [
                    {
                        label: 'Sim, minha identidade visual é bastante forte',
                        value: '1.25',
                        output: 'output_17_1.25'
                    },
                    {
                        label: 'Sim, mas não sei trabalhar ela direito',
                        value: '0.75',
                        output: 'output_17_0.75'
                    },
                    {
                        label: 'Não sei o que é identidade visual',
                        value: '0.4',
                        output: 'output_17_0.4'
                    },
                                        
                ]
            },
            {
                question: 'Você sabe os diferenciais do seu negócio?',
                name: 'diferencial_negocio',
                options: [
                    {
                        label: 'Tenho meus diferenciais bem definidos',
                        value: '1.25',
                        output: 'output_18_1.25'
                    },
                    {
                        label: 'Sei meus diferenciais, mas não trabalho focado nela',
                        value: '1.0',
                        output: 'output_18_1.0'
                    },
                    {
                        label: 'Não sei meus diferenciais',
                        value: '0.5',
                        output: 'output_18_0.5'
                    }                    
                ]
            },
            {
                question: 'Você sabe qual é seu público-alvo?',
                name: 'publico_alvo',
                options: [
                    {
                        label: 'Sim, meu público-alvo é bem definido',
                        value: '2.5',
                        output: 'output_19_2.5'
                    },
                    {
                        label: 'Não sei qual é meu público',
                        value: '0.5',
                        output: 'output_19_0.5'
                    },
                                        
                ]
            },
            {
                question: 'Você sabe o que te motiva a ter um negócio?',
                name: 'motivacao',
                options: [
                    {
                        label: 'Sim, tenho isso bem definido',
                        value: '1.25',
                        output: 'output_20_1.25'
                    },
                    {
                        label: 'Sim, tenho uma ideia geral',
                        value: '1.0',
                        output: 'output_20_1.0'
                    },
                    {
                        label: 'Não faço ideia',
                        value: '0.5',
                        output: 'output_20_0.5'
                    },                   
                ]

            },


        ]
    }
    res.render('forms_marketing', data);
})

/* POST enviar_formulario page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('redes_sociais', 'Answer is required').notEmpty()
    req.assert('publicidade', 'Answer is required').notEmpty()
    req.assert('identidade_visual', 'Answer is required').notEmpty()
    req.assert('diferencial_negocio', 'Answer is required').notEmpty()
    req.assert('publico_alvo', 'Answer is required').notEmpty()
    req.assert('motivacao', 'Answer is required').notEmpty()

    // let errors = req.validationErrors()
    // if (errors) {
    //     throw 'Erro de validação'
    // }
    let data = {
        title: 'Deu certo',
    }
    res.render('forms_marketing', data);
})

module.exports = router;