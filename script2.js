let idade = 24
let status = idade >=18 ?"Maior de idade" : "Menor de idade"  //o ? seria se for verdadeiro faça, o : seria o senão faça, retorna maior de idade
console.log(idade)
console.log(status)

let valor = null
let resultado = valor ?? "Valor padrão" //seria se tal variável é igual a outra verdadeira (no caso não é, por ser nulo), printe o valor de "valor", se não (??) printe outra coisa
console.log(resultado)

let idade1 = 25
let temCarteira = true

if (idade1 >= 18 && temCarteira){
    console.log("Pode dirigir")
}

// ! no temCarteira é para inverter o valor, ou seja, se torna 
if(idade1 <18 || !temCarteira){  
    console.log("Não pode dirigir")
}

if(!temCarteira){
    console.log("Não pode dirigir")
}



let tarefaConcluida = true
if(tarefaConcluida){
    console.log("A tarefa esta concluida")
}

let prioridade = 1
if(prioridade >=3){
    console.log("Prioridade alta")
} else {
    console.log("Prioridade não é alta")
}

/*
O if ternário é uma forma compacta de escrever um if...else simples em apenas uma única linha.

Ele recebe esse nome porque é o único operador do JavaScript que utiliza três elementos (operandos) para funcionar.

A Estrutura (Sintaxe)
A lógica funciona como uma pergunta rápida:
condição ? valor_se_verdadeiro : valor_se_falso
*/

if(prioridade === 1){
    console.log("Prioridade baixa.")
} else if (prioridade === 2){
    console.log("Prioridade média.")
} else if(prioridade === 3){
    console.log("Prioridade alta.")
} else {
    console.log("Prioridade desconhecida.")
}


let diaSemana = new Date().getDay()
console.log(diaSemana)
if(diaSemana === 0){
    console.log("Domingo.")
} else if (diaSemana === 1){
    console.log("Segunda.")
} else if(diaSemana === 2){
    console.log("Terça.")
} else if(diaSemana === 3){
    console.log("Quarta")
} else if(diaSemana === 4){
    console.log("Quinta.")
} else if(diaSemana === 5){
    console.log("Sexta")
} else if(diaSemana === 6){
    console.log("Sábado.")
}

/*O switch, case e break são usados para criar uma estrutura de decisão no código. Pense neles como um "menu de opções".
Eles servem para substituir sequências longas e confusas de if...else if, tornando o código muito mais limpo e fácil de ler quando você tem uma única variável que pode assumir vários valores conhecidos.

switch (A Escolha): É onde você coloca a variável que quer testar
case (As Opções): São os valores possíveis para aquela variável. Se a variável do switch for igual ao valor do case, o código dentro dele é executado.
break (A Parada): É fundamental. Ele diz ao computador: "Ei, já achamos o que queríamos, pode sair do switch agora!". Sem o break, o código continuaria executando todos os casos abaixo dele, mesmo que não fossem verdadeiros
default (O Padrão): É a opção "de reserva", caso nenhum dos case anteriores seja atendido (como o else final).

*/

switch(diaSemana){
    case 0:
        console.log("Domigo.")
        breaK;
    case 1:
        console.log("Segunda.")
        break;
    case 2:
        console.log("Terça.")
        break;
    case 3:
        console.log("Quarta.")
        break;
    case 4:
        console.log("Quinta.")
        break;
    case 5:
        console.log("Sexta.")
        break;
    case 6:
        console.log("Sábado.")
        break;
    default:
        console.log("Dia inválido.")
        break;
}


// A estrutura do for tem três quadrantes: 1- definindo variável. 2- definindo até onde a execução repete. 3- definindo o incremento da variável, no caso do i++ é de 1 em 1
for(let i = 0; i<5 ; i++){
    console.log("Contagem", i)
}

// Enquanto tal coisa for verdadeira, faça tal coisa. Basicamente o mesmo que o for, a diferença é que não se define a variável dentro dele.
let contador = 0
while(contador<3){
    console.log(contador)
    contador++
}

/*
do: Inicia o bloco de comandos.

while: Define a condição de parada.

Garantia: O código dentro do do sempre rodará no mínimo uma vez, independentemente da condição ser verdadeira ou falsa no início.
*/
let numero = 5
do {
    console.log("Número é: " , numero)
    numero--
} while(numero > 0 )