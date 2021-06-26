const express = require('express');
const router = express.Router();

/* GET forms_management page. */
router.get('/', function (req, res) {
    let data = {
        title: 'forms_management',
        questions: [
            {
                question: 'Há quanto tempo seu negócio existe',
                name: 'tempo_negocio',
                options: [
                    {
                        label: 'De 0 até 6 meses',
                        value: '0.5',
                        output: 'Vejo que você tá na jornada inicial do seu negócio e deve estar por diversas situações desafiadoras. Mas continue perseverando!'
                    },
                    {
                        label: 'Mais de 6 meses até 1 ano',
                        value: '0.75',
                        output: 'Vejo que você tá na jornada inicial do seu negócio e deve estar por diversas situações desafiadoras. Mas continue perseverando!'
                    },
                    {
                        label: 'Mais de 1 ano até 1 ano e meio',
                        value: '0.9',
                        output: 'Vejo que você passou desse tempo crítico de 1 ano do seu negócio. Parabéns! Você ainda deve estar enfrentando algumas situações desafiadoras, mas continue firme!'
                    },
                    {
                        label: 'Mais de 1 ano e meio até 2 anos',
                        value: '1.0',
                        output: 'Vejo que você passou desse tempo crítico de 1 ano do seu negócio. Parabéns! Você ainda deve estar enfrentando algumas situações desafiadoras, mas continue firme!'
                    },
                    {
                        label: 'Mais de 2 anos até 5 anos',
                        value: '1.1',
                        output: 'Wow! Você tem uma longa jornada com o seu negócio. Que demais!'
                    },
                    {
                        label: 'Mais de 5 anos até 10 anos',
                        value: '1.2',
                        output: 'Wow! Você tem uma longa jornada com o seu negócio. Que demais!'
                    },
                    {
                        label: 'Mais de 10 anos',
                        value: '1.3',
                        output: 'Uau, que legal que você está com mais de 10 anos com seu negócio operando! Você deve ter umas boas histórias para contar hein...'
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
                        output: 'Cuidar de um negócio com até 2 pessoas tem a vantagem da comunicação ser mais ágil, mas em compensação exige muito planejamento de tempo para cuidar de todas as áreas do seu negócio, boa comunicação, confiança e energia.'
                    },
                    {
                        label: 'Até 5 funcionários',
                        value: '0.5',
                        output: 'Ter uma equipe com até 5 pessoas tem a vantagem da comunicação ser mais ágil, uma divisão de trabalho para todos, mas em compensação exige que você gerencie o seu time tanto em relação aos processos operacionais do dia-a-dia como em relação com uma boa comunicação para ter um ambiente de trabalho agradável para todos.'
                    },
                    {
                        label: 'Até 8 funcionários',
                        value: '0.75',
                        output: 'Ter uma equipe com até 8 pessoas é desafidor pois exige que você gerencie o seu time tanto em relação aos processos operacionais do dia-a-dia como em relação com uma boa comunicação para ter um ambiente de trabalho agradável para todos.'
                    },
                    {
                        label: 'Até 10 funcionários',
                        value: '1.0',
                        output: 'Ter uma equipe com até 10 pessoas é desafidor pois exige que você gerencie o seu time tanto em relação aos processos operacionais do dia-a-dia como em relação com uma boa comunicação para ter um ambiente de trabalho agradável para todos.'
                    },
                    {
                        label: 'Mais de 10 funcionários',
                        value: '1.3',
                        output: 'Ter uma equipe com mais 10 pessoas é desafidor pois exige que você gerencie o seu time tanto em relação aos processos operacionais do dia-a-dia como em relação com uma boa comunicação para ter um ambiente de trabalho agradável para todos. Como você está gerenciando o seu time de colaboradores?'
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
                        output: 'Quando se tem um cardápio grande, é importante que você tenha capital de giro para sempre ter estoque dos insumos que você precisa para manter o seu cardápio. Cuidado!'
                    },
                    {
                        label: 'Médio, até 20 itens',
                        value: '1.0',
                        output: 'Quando se tem um cardápio médio, é importante que você tenha capital de giro para sempre ter estoque dos insumos que você precisa para manter o seu cardápio. Cuidado!'
                    },
                    {
                        label: 'Pequeno, até 10 itens',
                        value: '1.5',
                        output: 'Quando se tem um cardápio pequeno, é importante que você mantenha uma trabalho consistente e de boa qualidade. Já pensou nisso?!?'
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
                        output: 'Ei, que tal aprender como fazer propaganda do seu negócio nas redes sociais e alcançar mais clientes?'
                    },
                    {
                        label: 'Entre 21 a 50 pessoas',
                        value: '0.5',
                        output: 'Você já tem um alcance legal de ter de 20 a 50 pessoas comprando com você, mas que tal investir mais nos relacionamentos com seus clientes atuais para fidelizá-los e eles fazerem a melhor propaganda, o boca-a-boca.'
                    },
                    {
                        label: 'Entre 51 a 80 pessoas',
                        value: '0.75',
                        output: 'Você já tem um alcance legal de ter de 50 a 80 pessoas comprando com você, mas que tal investir mais nos relacionamentos com seus clientes atuais para fidelizá-los e eles fazerem a melhor propaganda, o boca-a-boca.'
                    },
                    {
                        label: 'Entre 81 a 120 pessoas',
                        value: '1.0',
                        output: 'Você já tem um alcance legal de ter de 80 a 120 pessoas comprando com você, mas que tal investir mais nos relacionamentos com seus clientes atuais para fidelizá-los e eles fazerem a melhor propaganda, o boca-a-boca.'
                    },
                    {
                        label: 'Entre 121 a 200 pessoas',
                        value: '1.25',
                        output: 'Você já tem um alcance legal de ter de 120 a 200 pessoas comprando com você, mas que tal investir mais nos relacionamentos com seus clientes atuais para fidelizá-los e eles fazerem a melhor propaganda, o boca-a-boca.'
                    },
                    {
                        label: 'Acima de 200 pessoas',
                        value: '1.25',
                        output: 'Você já tem um alcance legal de ter mais de 200 pessoas comprando com você, mas que tal investir mais nos relacionamentos com seus clientes atuais para fidelizá-los e eles fazerem a melhor propaganda, o boca-a-boca.'
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
                        output: 'Parabéns por conseguir ter essa reserva! Você sabia que investir na informatização do seu negócio pode ter ajudar a ter uma melhor gestão, mais controle das operações, finanças e marketing e pode ter ajudar a ver onde você pode economizar?'
                    },
                    {
                        label: 'É difícil sobrar o suficiente para reinvestir, mas eu tento guardar',
                        value: '0.5',
                        output: 'Entendo que a sua situação de tentar manter uma reserva financeira é difícil, mas continue tentando. Já pensou em criar uma promoção para levantar um rápido capital de giro e quem sabe, conquistar mais clientes?'
                    }
                ]
            },
            {
           
                question: 'Tem outras unidades e/ou pretende expandir?',
                name: 'pretende_expandir',
                options: [
                    {
                        label: 'Sim',
                        value: '1.4',
                        output: 'Que legal que você já tem os próximos passos do seu negócio! Isso é importante para você ter uma planejamento mais focado com seu objetivo.'
                    },
                    {
                        label: 'Não',
                        value: '0.4',
                        output: 'Se você não tem a intenção de expandir o seu negócio, quais os próximos passos que você tem para o seu negócio? O futuro do seu negócio é importante para você ter uma planejamento mais focado com seu objetivo.'
                    }
                ]                    
            },
            {
           
                question: 'Possui as licenças necessárias para funcionar? (Vigilância sanitária, bombeiros, etc)',
                name: 'licenca_necessaria',
                options: [
                    {
                        label: 'Sim',
                        value: '1.5',
                        output: 'Excelente que você está em dias com as licenças necessárias do funcionamento do seu negócio! Continue assim :)'
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'Ei, que tal tentar ficar em dia com a maioria das licenças necessárias para o funcionamento do seu negócio e evitar problemas?'
                    }                    
                ]
            },
        ]
    }
    res.render('forms_management', data);
})

/* POST forms_management page. */
router.post('/', function (req, res) {
    // Usar a variavel req para pegar as informações enviadas pelo formulário
    req.assert('tempo_negocio', 'Answer is required').notEmpty()
    req.assert('num_funcionarios', 'Answer is required').notEmpty()
    req.assert('tam_cardapio', 'Answer is required').notEmpty()
    req.assert('compra_semana', 'Answer is required').notEmpty()
    req.assert('din_reinvestir', 'Answer is required').notEmpty()
    req.assert('pretende_expandir', 'Answer is required').notEmpty()
    req.assert('licenca_necessaria', 'Answer is required').notEmpty()

    // let errors = req.validationErrors()
    // if (errors) {
    //     throw 'Erro de validação'
    // }
    let data = {
        title: 'Deu certo',
    }
    res.render('forms_management', data);
})

module.exports = router;