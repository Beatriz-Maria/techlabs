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
                    }                   
                ]
            },
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
    res.render('forms', data);
})

module.exports = router;