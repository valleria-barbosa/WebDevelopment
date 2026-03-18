console.log("Mensagem normal")

console.info("Informação")

console.warn("Um aviso")

console.error("Erro")

// atalho para comentar ctrl + :

console.table(
    [
        {
            id:1,tarefa: "EstudarJS"
        },
        {
            id:2,tarefa: "Praticas código"
        }
    ]
)
// Conchete serve para montar a tabela, as chaves são as linhas

console.group("Grupo de logs")
console.log('log 1 ')
console.log('log 2')
console.groupEnd()
//console.group serve para mostrar um conjunto de logs

console.time("Tempo")
let casa = ""
if (casa =="casa"){
    console.log("casa")
}
console.timeEnd("Tempo")

//console.time mostra quanto tempo leva para percorrer o código
/* serve para colocar comentário
 com várias linhas alt+k+c */

var antigo = "forma antiga de declarar variaveis"

let userName = "Valéria" //camelCase
//Variáveis que alteram
const API_URL="url" //snake_case
//Variáveis que não alteram

let texto = "Olá"
console.log("nome= " + texto + " tipo: " + typeof(texto))

let numero = 42
console.log("numero=" + numero + " tipo: " + typeof(numero))

let isCompleted = false //booleano
console.log("numero= " + isCompleted + " tipo: " + typeof(isCompleted))

let semValor
console.log("numero= " + semValor + " tipo: " + typeof(semValor))

let nulo = null
console.log("numero= " + nulo + " tipo: " + typeof(nulo))

let uniqueId = Symbol("id")
console.log(typeof(uniqueId))
console.log(uniqueId)
//criar um identificador único

let bigNumero = 999999999999n //n no final diz que pode ter mais números na frente
console.log("numero= " + bigNumero + " tipo: " + typeof(bigNumero))

let task = {
    //propriedade 1
  id: 1,
  //Proprieade 2
  title: "Aprender JavaScript",
  //propriedade 3
  completed: false,
  //propriedade 4
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};

let tasks = [
    {
    //propriedade 1
  id: 1,
  //Proprieade 2
  title: "Aprender JavaScript",
  //propriedade 3
  completed: false,
  //propriedade 4
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
}
]

let hoje = new Date()
console.log(hoje)

let amanha = new Date ("3/18/2026")
console.log(amanha)

let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// essa expressão regular esta demonstrando como é o número de telefone para validar
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true
console.log(pattern.test ("yes"))

// Formas de conversão de variáveis
console.log(Number("42"))
console.log("42")

console.log(parseInt("42"))
console.log("42")

console.log(Boolean(""))

 //Operações
let a = 10
let b = 3
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

//Operadores de incremento e decremento
let contador1 = 0
let contador2 = 0
console.log(++contador1)
console.log(contador1++)

console.log(++contador2)
console.log(contador2++)

//Operadores de Atribuição
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

//Operadores de Comparação
console.log(10 == "10");   // true (compara somente o valor)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)
        
//Operadores lógicos
console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)
