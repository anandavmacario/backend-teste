// Tipos de dados
// No Javascript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

//Principais tipos de dados:
//String (textos)
//Number (numeros)
//Boolean (verdadeiro ou falso)
//Object (objetos, que agrupam informações)
//Array (lista de valores)
//Null (alor vazio)
//Underfined (quando algo não foi definido)

//STRING (textos)
//Uma string é um texto, sempre escrito entre aspas (""ou'')
let nome = "Jarvis";
let mensagem = 'Olá, mundo!'

console.log (nome);
console.log(mensagem)

let saudacao = "Olá, " + nome + "!";
console.log(saudacao); //Exibe "Olá, Jarvis"

//typeof
//O typeof serve para descobrir o tipo de umm valor ou variável

let nomeDois = "Geto";
console.log(typeof nomeDois);

let soma = 10 + 3;
console.log(soma);

//Boolean (Verdadeiro ou falso)
// Um boolean pode ter apenas dois valores: true (vedadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); //Exibir true
console.log(menorDeIdade); //Exibir false

let idade = 16;
let podeDirigir = idade >= 18;
console.log(podeDirigir);