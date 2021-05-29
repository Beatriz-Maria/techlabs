const questionario = {
  gestao: {
    rotulo: 'Gestão',
    perguntas: [
      {
        id: 'G01',
        rotulo: '1. Há quanto tempo seu negócio existe?',
        pontuacao_maxima: 1.3,
        opcoes: [
          {
            id: 'GO-01',
            rotulo: 'Estou planejando e não abri o meu negócio',
            dica: 'Bacana',
            pontuacao: 0.25,
          },
          {
            id: 'GO-02',
            rotulo: 'De 0 até 6 meses',
            dica: 'Top',
            pontuacao: 0.5,
          },
          {
            id: 'GO-03',
            rotulo: 'Mais de 6 meses até 1 ano',
            dica: 'Mass',
            pontuacao: 0.75,
          }
        ]
      }
    ]
  },
  financas: {
    rotulo: ''
  },
  marketing: {
    rotulo: ''
  },
  atendimento_cliente: {
    rotulo: ''
  }
};
