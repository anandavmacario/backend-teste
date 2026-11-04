//FUNÇÕES EM JAVASCRIPT

//O quê é uma função?
//Uma funnção é um bloco de código reutilizáel, criado para executar uma tarefa específica..

//ANALOGIA SIMPLES
//Você vai colocar valores (parâmetros)
//Ela processa
//Devolve um resultado(return)

//Estrutura básica de uma função

function nomeDaFuncao(parametro1, parametro2){
    //código que será executado
    //return resultado;

}

//function = palavra chave
//nomeDaFuncao = nome da função
//parâmetro = valores que a função recebe
//return = valor que a função devolve

//5 EXEMPLOS

//1- Somar dois números

function somar(a, b){
return a + b;
}
console.log(somar(2,15))

//2- Converter real para dólar
function realParaDolar(valorReal,cotacao){
    return valorReal / cotacao;
}
console.log(realParaDolar(10,5.20).toFixed(2))

//3- Converter dólar para real
function dolarParaReal(valorDolar,cotacao){
    return valorDolar * cotacao;
}
console.log(dolarParaReal(5,5.20));

//4- Aumento do salário (você merece 25% de aumento)
function aumentoSalario(salario){
    return salario + (salario * 0.25);
}
console.log(aumentoSalario(1500,));

//Verificar se é par ou ímpar

function parOuImpar(numero){
    if (numero % 2 === 0) {
return "Par";
 } else {
    return "Ímpar";
}
}
console.log(parOuImpar(2));
console.log(parOuImpar(3));