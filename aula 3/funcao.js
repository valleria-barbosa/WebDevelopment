// Função que exibe detalhes de uma tarefa
// tem que colocar entre ` e não " ou '
function exibirTarefa(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
//Tem que colocar os parâmetros obrigatórios primeiro que os não obrigatório
function criarTarefa(titulo, descricao = "Sem descrição",prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa);

// Função que calcula estatísticas básicas de um array de números
function calcularEstatisticas(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max, numeros, quantidade: numeros.length };
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log(resultados);

// Função para formatar uma data no formato "DD/MM/AAAA"
function formatarData(data, formato = 'curto') {
  // Converte para objeto Date, se necessário
  if (!(data instanceof Date)) {
    data = new Date(data);
  }
  // Verifica se a data é válida
  if (isNaN(data.getTime())) {
    return "Data inválida";
  }
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  
  if (formato === 'curto') {
    return `${dia}/${mes}/${ano}`;
  }
  // Outros formatos podem ser implementados aqui...
  return `${dia}/${mes}/${ano}`;
}
console.log("Data formatada:", formatarData(new Date()));

// Arrow function que retorna a subtração de dois números. É uma função enxuta com retorno implícito
const subtrair = (a, b) => a - b;
console.log("Subtração:", subtrair(20, 5));

// Utilizando arrow function para dobrar os elementos de um array.
//O .map é uma loop
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Números dobrados:", dobrados);

// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
  valor: 0,
  incrementarTradicional: function() {
    setTimeout(function() {
      // Neste caso, "this" não se refere ao objeto "contador"
      console.log("Valor (tradicional):", this.valor);
    }, 100);
  },
  incrementarArrow: function() {
    setTimeout(() => {
      // A arrow function preserva o contexto do objeto "contador"
      this.valor++;
      //this serve para chamar
      console.log("Valor (arrow):", this.valor);
    }, 100);
  }
};
contador.incrementarTradicional();
contador.incrementarArrow();
//setTimeout é o tempo para poder executar.
