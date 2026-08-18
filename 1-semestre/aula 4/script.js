//Manipulação de strings

//Criação de strings
let titulo = "Aprender JavaScript";
let descricao = "Estudar manipulação de strings";

console.log("Título: ", titulo);
console.log("Descrição: ", descricao);

//Comprimento da string
console.log("Comprimento do título: ", titulo.length);

//Acesso a caracteres individuais
console.log("Primeiro caractere: ", titulo[0]);
console.log("Último caractere: ", titulo[titulo.length - 1]);
console.log("Caractere do título na posição 7: ", titulo[8]);

//Concatenação tradicional
let categoria = "Estudo";
let infCompleta = "Categoria: " + categoria + " - " + titulo;
console.log("Concatenação tradicional: ", infCompleta);

// Template strings (ES6+)
let dataCriacao = "13/04/2026";
let resumo = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}`;

console.log("Template string:");
console.log(resumo);

//Métodos para buscar em strings
console.log("Posição de 'JavaScript': ", titulo.indexOf("JavaScript"));
// indexOf: Onde começa aquela parte específica da string

console.log("'JavaScript' está presente? ", titulo.includes("JavaScript"));
//Aparecerá 'true' porque existe a palavra javaScript no título

console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));
//Retorna true, porque começa com aprender.

console.log("Termina com 'Script'? ", titulo.endsWith("Script"));
//Retorna true

//Função que trunca uma string se elas for maior que um tamanho máximo
const truncarDescricao = (texto, maxLength = 30) => {
    if (texto.length <= maxLength){
        return texto;
    }
    return `${texto.substring(0,maxLength)}...`;
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";

console.log("Descrição truncada: ", truncarDescricao(descricaoLonga))

console.log("Descrição truncada (100 carateres): ", truncarDescricao(descricaoLonga,100));

//Slice e Substring
let texto = "JavaScript é incrível!";
console.log("Original: ", texto);
console.log("slice(0,10): ", texto.slice(0,10));
// retorna JavaScript
//slice(): Aceita números negativos. Se você colocar -1, ele começa a contar do final da string para o começo.
console.log(texto.slice(-3));
//Retorna "el!" (os últimos 3)
console.log("substring(0,10): ", texto.substring(0,10));
//retorna JavaScript
// O substring não entende números negativos, se passar um número negativo, ele o trata como se fosse 0


//Split e Join
let tags = "javascript,programação,web,frontend";

let arrayTags = tags.split(",");
//Slipt transforma string em array.
//(","): Este é o separador (ou delimitador). Você está dizendo ao JavaScript: "Sempre que você encontrar uma vírgula, corte a corda e comece um novo item
console.log("Array de tags:", arrayTags);

let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
let textoTarefas = listaTarefas.join("|");
//Join transforma array em string
//Se você usar ("|"): O JavaScript pega cada item do array e coloca esse "pauzinho" (chamado de pipe) entre eles.
//Resultado do seu código: "Estudar JS|Criar TaskMaster|Testar aplicação"

//Math
// Exibindo constantes
console.log("Math.PI:", Math.PI);
//Representa a constante $\pi$ (Pi).Valor: Aproximadamente 3.14159...
console.log("Math.E:", Math.E);
//Representa a constante de Euler (ou número de Neper).
//Valor: Aproximadamente 2.71828...

//Cálculo da área de um círculo
const raio = 5;
const areaCirculo = Math.PI * Math.pow(raio,2);
//pow = power = potência
console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);

const numero = 9.7;
console.log("Math.round(9.7): ", Math.round(numero));
//Arredonda para cima ou para baixo, depende se for maior que .5 ou menor que .5.

console.log("Math.floor(9.7): ", Math.floor(numero));
//Arredonda para baixo

console.log("Math.ceil(9.7): ", Math.ceil(numero));
//Sempre arredonda para cima

console.log("Math.trunc(9.7): ", Math.trunc(numero));
//Retira a casa decimal



const pi = Math.PI;
console.log("Pi com 2 casas decimais: ", pi.toFixed(2));
//retorna casa decimais especificas da quantidade que colocar no toFixed

//Função para gerar número aleatório entre min e max
function numeroAleatorioEntre(min,max){
    return Math.floor(Math.random()*(max - min + 1))+ min;
}
console.log("Número aleatório entre 1 e 10: ", numeroAleatorioEntre(1,10));

//DATAS

//Data atual
const hoje = new Date();
console.log("Data atual: ", hoje.toString());

//Data a partir de string ISO
const dataISO = new Date("2025-06-15T10:30:00");
console.log("Data a partir de string ISO:", dataISO);

//Data a partir de componetes (mês: 0 a 11)
const dataComponentes = new Date(2025,5,15,10,30,0);
//Data, mês, dia, hora, minuto, segundo
console.log("Data a partir de componentes: ", dataComponentes)

//Função para formatar data no formato DD/MM/AAAA
function formatarData(data){
    const dia = data.getDate().toString();
    const mes = (data.getMonth() + 1).toString();
    //o +1 é porque no js os meses funcionam como um array e começa do 0
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}
console.log("Formatar data: ", formatarData(hoje));

//Função para adicionar dias em uma data
function adicionarDias(data,dias){
    const novaData = new Date(data);
    novaData.setDate(data.getDate() + dias);
    return novaData;
}
const amanha = adicionarDias(hoje,1);

console.log("Amanhã: ", formatarData(amanha));

//Diferença entre duas datas (em milissegundos) e conversão para dias
const dataInicial = new Date(2025,0,1);
const dataFinal = new Date(2025,11,31);
const diferencaMs = dataFinal - dataInicial;
const diferencaDias = Math.ceil(diferencaMs/(1000*60*60*24));
console.log("Diferença em dias:", diferencaDias);