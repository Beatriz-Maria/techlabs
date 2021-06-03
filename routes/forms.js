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
                    },
                    {
                        label: 'Mais de 6 meses até 1 ano',
                        value: '2'
                    },
                    {
                        label: 'Mais de 1 ano até 1 ano e meio',
                        value: '3'
                    },
                    {
                        label: 'Mais de 2 anos até 5 anos',
                        value: '4'
                    },
                    {
                        label: 'Mais de 5 anos até 10 anos',
                        value: '5'
                    },
                    {
                        label: 'Mais de 10 anos',
                        value: '6'
                    }
                    
                ]
            },

            {
           
                question: 'Quantos funcionários você possui hoje?',
                name: 'num_funcionarios',
                options: [
                    {
                        label: 'Até 2 funcionários',
                        value: '0'
                    },
                    {
                        label: 'Até 5 funcionários',
                        value: '1'
                    },
                    {
                        label: 'Até 8 funcionários',
                        value: '2'
                    },
                    {
                        label: 'Até 10 funcionários',
                        value: '3'
                    },
                    {
                        label: 'Mais de 10 funcionários',
                        value: '4'
                    }
                ]

            },

            {
           
                question: 'Qual o tamanho do seu cardápio?',
                name: 'tam_cardapio',
                options: [
                    {
                        label: 'Grande, acima de 20 itens',
                        value: '0'
                    },
                    {
                        label: 'Médio, até 20 itens',
                        value: '1'
                    },
                    {
                        label: 'Pequeno, até 10 itens',
                        value: '2'
                    }
                    
                ]

            },

            {
           
                question: 'Quantos clientes compram por semana?',
                name: 'compra_semana',
                options: [
                    {
                        label: 'Até 20 pessoas',
                        value: '0'
                    },
                    {
                        label: 'Entre 21 a 50 pessoas',
                        value: '1'
                    },
                    {
                        label: 'Entre 51 a 80 pessoas',
                        value: '2'
                    },
                    {
                        label: 'Entre 81 a 120 pessoas',
                        value: '3'
                    },
                    {
                        label: 'Entre 121 a 200 pessoas',
                        value: '4'
                    },
                    {
                        label: 'Acima de 200 pessoas',
                        value: '5'
                    }
                ]

            },
            {

                question: 'Qual é seu Ticket médio?',
                name: 'ticket_medio',
                options: [
                    {
                        label: 'Eu não sei o que é ticket médio',
                        value: '0'
                    },
                    {
                        label: 'Eu sei o que é ticket médio, mas eu não faço essas contas.',
                        value: '1'
                    },
                    {
                        label: 'Meu ticket médio é próximo do valor do meu item mais caro.',
                        value: '2'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mais barato',
                        value: '3'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mediano.',
                        value: '4'
                    },
                    
                ]
            },
            {

                question: 'Quais são seus custos médios mensais?',
                name: 'custos_medios_mensais',
                options: [
                    {
                        label: 'Eu não sei o que é custo médio.',
                        value: '0'
                    },
                    {
                        label: 'Eu sei o que é custo médio mas eu não faço controle das contas.',
                        value: '1'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mais caro.',
                        value: '2'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mais barato.',
                        value: '3'
                    },
                    {
                        label: 'O custo médio é próximo de 50% do meu item mediano.',
                        value: '4'
                    },
                    
                ]
            },
            {

                question: 'Qual é sua margem de lucro?',
                name: 'margem_lucro',
                options: [
                    {
                        label: 'Eu não sei o que é margem de lucro?',
                        value: '0'
                    },
                    {
                        label: 'Eu sei o que é margem de lucro mas eu não faço controle das contas.',
                        value: '1'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mais caro.',
                        value: '2'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mais barato.',
                        value: '3'
                    },
                    {
                        label: 'A margem de lucro média é próximo de 20% do meu item mediano.',
                        value: '4'
                    },
                    
                ]
            },
            {

                question: 'Você faz fluxo de caixa?',
                name: 'fluxo_caixa',
                options: [
                    {
                        label: 'Sim, todo dia.',
                        value: '0'
                    },
                    {
                        label: 'Sim, na maioria das vezes.',
                        value: '1'
                    },
                    {
                        label: 'Quase nunca.',
                        value: '2'
                    },
                    {
                        label: 'Não sei o que é fluxo de caixa.',
                        value: '3'
                    },
                    {
                        label: 'Meu ticket médio é mais próximo do valor do meu item mediano.',
                        value: '4'
                    },
                    
                ]
            },
            {

                question: 'Você faz controle de estoque?',
                name: 'controle_estoque',
                options: [
                    {
                        label: 'Sim, todo dia',
                        value: '0'
                    },
                    {
                        label: 'Sim, até 2 vezes por semana',
                        value: '1'
                    },
                    {
                        label: 'Na maioria das vezes não, sempre tenho que correr atrás de alguma coisa na última hora.',
                        value: '2'
                    },
                                        
                ]
            },
            {

                question: 'A contabilidade e impostos do seu restaurante estão em dia?',
                name: 'contabilidade_imposto',
                options: [
                    {
                        label: 'Sim',
                        value: '0'
                    },
                    {
                        label: 'Não',
                        value: '1'
                    },
                                        
                ]
            },
            {

                question: 'Você conhece os custos variáveis do negócio?',
                name: 'custos_variaveis',
                options: [
                    {
                        label: 'Sim',
                        value: '0'
                    },
                    {
                        label: 'Não',
                        value: '1'
                    },
                                       
                ]
            },
            {

                question: 'O restaurante tem uma presença constante nas redes sociais (Instagram, TikTok e Facebook)?',
                name: 'redes_sociais',
                options: [
                    {
                        label: 'Posto constantemente nas redes sociais',
                        value: '0'
                    },
                    {
                        label: 'Apareço nas redes sociais apenas em eventos/datas especiais ',
                        value: '1'
                    },
                    {
                        label: 'Uso bem pouco as redes sociais',
                        value: '2'
                    },
                    {
                        label: 'Não uso rede social para o meu negócio',
                        value: '3'
                    },
                                        
                ]
            },
            {

                question: 'Sabe utilizar o Facebook/Google/Instagram ads?',
                name: 'publicidade',
                options: [
                    {
                        label: 'Conheço e utilizo',
                        value: '0'
                    },
                    {
                        label: 'Conheço, mas não utilizo',
                        value: '1'
                    },
                    {
                        label: 'Não conheço',
                        value: '2'
                    },
                                        
                ]
            },
            {

                question: 'Seu negócio possui uma identidade visual?',
                name: 'identidade_visual',
                options: [
                    {
                        label: 'Sim, minha identidade visual é bastante forte',
                        value: '0'
                    },
                    {
                        label: 'Sim, mas não sei trabalhar ela direito',
                        value: '1'
                    },
                    {
                        label: 'Não sei o que é identidade visual',
                        value: '2'
                    },
                                        
                ]
            },
            {

                question: 'Você sabe os diferenciais do seu negócio?',
                name: 'diferencial_negocio',
                options: [
                    {
                        label: 'Tenho meus diferenciais bem definidos',
                        value: '0'
                    },
                    {
                        label: 'Sei meus diferenciais, mas não trabalho focado nela',
                        value: '1'
                    },
                    {
                        label: 'Não sei meus diferenciais',
                        value: '2'
                    }                    
                ]
            },
            {

                question: 'Você sabe qual é seu público-alvo?',
                name: 'publico_alvo',
                options: [
                    {
                        label: 'Sim, meu público-alvo é bem definido',
                        value: '0'
                    },
                    {
                        label: 'Não sei qual é meu público',
                        value: '1'
                    },
                                        
                ]
            },
            {

                question: 'Você sabe o que te motiva a ter um negócio?',
                name: 'motivacao',
                options: [
                    {
                        label: 'Sim, tenho isso bem definido',
                        value: '0'
                    },
                    {
                        label: 'Sim, tenho uma ideia geral',
                        value: '1'
                    },
                    {
                        label: 'Não faço ideia',
                        value: '2'
                    }                   
                ]
            },
            {

                question: 'O restaurante realiza entrega via aplicativo delivery?',
                name: 'delivery',
                options: [
                    {
                        label: 'Sim',
                        value: '0'
                    },
                    {
                        label: 'Não',
                        value: '1'
                    }                                        
                ]
            },
            {

                question: 'Quantos clientes voltam a comprar do seu restaurante?',
                name: 'volta_clientes',
                options: [
                    {
                        label: 'A grande maioria (mais de 75%) dos meus clientes voltam a comprar de mim.',
                        value: '0'
                    },
                    {
                        label: 'Uma quantidade razoável (de 50% a 75%) dos meus clientes voltam a comprar de mim.',
                        value: '1'
                    },
                    {
                        label: 'Poucos clientes (de 30% a 50%) voltam a comprar de mim.',
                        value: '2'
                    },
                    {
                        label: 'Muito pouco clientes (menos de 30%) voltam a comprar de mim',
                        value: '3'
                    },
                    {
                        label: 'Eu sei que tenho clientes que voltam mas não tenho noção da quantidade de clientes que voltam.',
                        value: '4'
                    },
                    
                ]
            },
            {

                question: 'Qual é o principal motivo para os clientes voltarem?',
                name: 'motivo_volta_clientes',
                options: [
                    {
                        label: 'Não sei :(',
                        value: '0'
                    },
                    {
                        label: 'A comida do meu estabelecimento.',
                        value: '1'
                    },
                    {
                        label: 'O ambiente do meu estabelecimento.',
                        value: '2'
                    },
                    {
                        label: 'Tanto a comida como o ambiente que eu ofereço no meu estabelecimento.',
                        value: '3'
                    }                    
                ]
            },
            {

                question: 'Você mede o nível de satisfação?',
                name: 'nps',
                options: [
                    {
                        label: 'Temos sim um formulário de pesquisa de satisfação (papel, tablet etc) e muitos clientes preenchem.',
                        value: '0'
                    },
                    {
                        label: 'Temos sim um formulário de pesquisa de satisfação (papel, tablet etc) mas só poucos clientes preenchem.',
                        value: '1'
                    },
                    {
                        label: 'Na maioria das vezes eu vou passando pelos clientes e aproveito para perguntar se ele ficou satisfeito com a comida/serviço.',
                        value: '2'
                    },
                    {
                        label: 'Às vezes, quando eu lembro, vou passando pelos clientes e aproveito para perguntar se ele ficou satisfeito com a comida/serviço.',
                        value: '3'
                    },
                    {
                        label: 'Na maioria das vezes eu pergunto para o cliente se ele ficou satisfeito com a comida/serviço só na hora dele pagar.',
                        value: '4'
                    },
                    {
                        label: 'Às vezes, quando eu lembro, pergunto para o cliente se ele ficou satisfeito com a comida/serviço só na hora dele pagar.',
                        value: '5'
                    },
                    {
                        label: 'Não sei dizer.',
                        value: '6'
                    },
                    
                ]
            },
            {

                question: 'Você sabe de onde vem seus clientes (aplicativos, bairros específicos...)?',
                name: 'vem_clientes',
                options: [
                    {
                        label: 'Sim, a maioria dos clientes.',
                        value: '0'
                    },
                    {
                        label: 'Só sei de alguns clientes',
                        value: '1'
                    },
                    {
                        label: 'Sei de bem poucos clientes.',
                        value: '2'
                    },
                                        
                ]
            },




        ]
    }
    res.render('forms', data);
})

module.exports = router;