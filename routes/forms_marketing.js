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
                        output: 'Manter as redes sociais em constante movimento é uma ótima forma de fidelizar a sua clientela, ouvir o que eles desejam e até atrair mais novos clientes. Continue assim!'
                    },
                    {
                        label: 'Apareço nas redes sociais apenas em eventos/datas especiais ',
                        value: '2.0',
                        output: 'Manter as redes sociais em constante movimento é uma ótima forma de fidelizar a sua clientela, ouvir o que eles desejam e até atrair mais novos clientes. Que tal se esforçar mais e mostrar mais do seu trabalho?'
                    },
                    {
                        label: 'Uso bem pouco as redes sociais',
                        value: '1.5',
                        output: 'Manter as redes sociais em constante movimento é uma ótima forma de fidelizar a sua clientela, ouvir o que eles desejam e até atrair mais novos clientes. Que tal se esforçar mais e mostrar mais do seu trabalho?'
                    },
                    {
                        label: 'Não uso rede social para o meu negócio',
                        value: '0.5',
                        output: 'Manter as redes sociais em constante movimento é uma ótima forma de fidelizar a sua clientela, ouvir o que eles desejam e até atrair mais novos clientes. Que tal se esforçar mais e mostrar mais do seu trabalho?'
                    }                   
                ]
            },
            {
                question: 'Sabe utilizar o Facebook/Google/Instagram ads?',
                name: 'publicidade',
                options: [
                    {
                        label: 'Conheço e utilizo',
                        value: '1.25',
                        output: 'No momento que vivemos, sabemos que é muito importante fazer o marketing do seu negócio nas redes socias. Continue fazend ads e mantendo as redes sociais do seu negócioa ativo!'
                    },
                    {
                        label: 'Conheço, mas não utilizo',
                        value: '0.75',
                        output: 'No momento que vivemos, sabemos que é muito importante fazer o marketing do seu negócio nas redes socias. Que tal tirar um tempo e fazer um ads para alcançar uma clientela maior para o seu negócio e fidelizar mais ainda os seus clientes.'
                    },
                    {
                        label: 'Não conheço',
                        value: '0.4',
                        output: 'No momento que vivemos, sabemos que é muito importante fazer o marketing do seu negócio nas redes socias. Tente tirar um tempo para aprender a fazer esses ads para alcançar uma clientela maior para o seu negócio.'
                    }                 
                ]
            },
            {
                question: 'Seu negócio possui uma identidade visual?',
                name: 'identidade_visual',
                options: [
                    {
                        label: 'Sim, minha identidade visual é bastante forte',
                        value: '1.25',
                        output: 'Parabéns que a sua identidade visual é bastante forte. Aproveite e use bastante a sua marca nas propagandas das redes sociais. Fortaleça seu posicionamento no mercado e se destaque em relação aos seus concorrentes.'
                    },
                    {
                        label: 'Sim, mas não sei trabalhar ela direito',
                        value: '0.75',
                        output: 'Parabéns que você já tem asua identidade visual. Que tal usar a sua marca nas propagandas das redes sociais e fortalecer o seu negócio para se destacar em relação a concorrência e agregar mais profissionalismo?'
                    },
                    {
                        label: 'Não sei o que é identidade visual',
                        value: '0.4',
                        output: 'Identidade visual corresponde a uma imagem que traduz o seu negócio. Por exemplo, logo é uma identidade visual. E ela é importante para se fortaleça seu posicionamento no mercado e se destaque em relação aos seus concorrentes. Que tal começar a correr atrás disso?'
                    }               
                ]
            },
            {
                question: 'Você sabe os diferenciais do seu negócio?',
                name: 'diferencial_negocio',
                options: [
                    {
                        label: 'Tenho meus diferenciais bem definidos',
                        value: '1.25',
                        output: 'Que demais que você conhece os diferenciais do seu negócio. Junto com uma identidade forte, use e abuse disso nas propagandas das redes sociais e também na propagando boca a boca.'
                    },
                    {
                        label: 'Sei meus diferenciais, mas não trabalho focado nela',
                        value: '1.0',
                        output: 'Que bom que você sabe que tem os seus diferenciais. Investir nelas e também fazer propaganda delas vai fortalecer seu posicionamento no mercado e se destaque em relação aos seus concorrentes. Que tal tirar um tempo e trabalhar melhor nas suas propagandas e divulgar seus diferenciais?'
                    },
                    {
                        label: 'Não sei meus diferenciais',
                        value: '0.5',
                        output: 'Conhecer os diferenciais do seu negócio vai fortalecer seu posicionamento no mercado e se destaque em relação aos seus concorrentes. Que tal tirar um tempo e pensar no que seu negócio se diferencia dos seus concorrentes?'
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
                        output: 'Que demais que você conhece bem o seu público-alvo. Isso ajuda a direcionar a propaganda do seu negócio para este grupo, ajuda a montar novos itens que a sua clientela goste, entre outros benefícios.'
                    },
                    {
                        label: 'Não sei qual é meu público',
                        value: '0.5',
                        output: 'Conhecer seu público-alvo é importante porque direciona principalmente seus investimentos e custos. Conhecer o seu público-avo ajuda a direcionar a propaganda do seu negócio para este grupo, ajuda a montar novos itens que a sua clientela goste, entre outros benefícios.'
                    }
                                        
                ]
            },
            {
                question: 'Você sabe o que te motiva a ter um negócio?',
                name: 'motivacao',
                options: [
                    {
                        label: 'Sim, tenho isso bem definido',
                        value: '1.25',
                        output: 'Definir um propósito é o primeiro passo para a elaboração do seu negócio. Além de ter dar direções para como se fortalecer no mercado, se pocionar em relação à concorrência, direciona sua identidade visual e consequentemente as suas propagandas. Continue sempre investindo nisso e fortalecendo o propósito do seu negócio!'
                    },
                    {
                        label: 'Sim, tenho uma ideia geral',
                        value: '1.0',
                        output: 'Definir um propósito é o primeiro passo para a elaboração do seu negócio. Além de ter dar direções para como se fortalecer no mercado, se pocionar em relação à concorrência, direciona sua identidade visual e consequentemente as suas propagandas. Que tal refletir sobre o propósito do seu negócio e direcionar esforços em relação ao marketing para disseminar ele.'
                    },
                    {
                        label: 'Não faço ideia',
                        value: '0.5',
                        output: 'Definir um propósito é o primeiro passo para a elaboração do seu negócio. Além de ter dar direções para como se fortalecer no mercado, se pocionar em relação à concorrência, direciona sua identidade visual e consequentemente as suas propagandas. Que tal refletir sobre o propósito do seu negócio e direcionar esforços em relação ao marketing para disseminar ele.'
                    }                    
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