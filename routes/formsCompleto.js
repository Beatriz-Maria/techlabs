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
                        output: 'Que legal que você já tem os próximos passos do seu negócio! Isso é importante para você ter uma planejamento mais focado com seu objetivo.'
                    },
                    {
                        label: 'Não',
                        value: '0.4',
                        output: 'Se você não tem a intenção de expandir o seu negócio, quais os próximos passos que você tem para o seu negócio? O futuro do seu negócio é importante para você ter uma planejamento mais focado com seu objetivo.'
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
                        output: 'Excelente que você está em dias com as licenças necessárias do funcionamento do seu negócio! Continue assim :)'
                    },
                    {
                        label: 'Não',
                        value: '0.5',
                        output: 'Ei, que tal tentar ficar em dia com a maioria das licenças necessárias para o funcionamento do seu negócio e evitar problemas?'
                    },                    
                ]
            },
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
                    },                    {
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
                    },
                    
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
                    },
                                        
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
                    },
                                        
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