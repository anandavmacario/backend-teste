//Estrutura Condicionais (Tomando Decisões)
//As estruturas condicionais permitem executar diferentes blocos de código dependendo de uma condição
//If/Else - Condicionais
//If - Verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa,
//o ELSE pode executar outro bloco de código

let idade = 12

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade");
}

//IF, ELSE IF, ELSE (Múltiplas condições)
let idade2 = 13;

if (idade2 < 12){
    console.log("Você é uma criança");

} else if (idade2 < 18){
    console.log("Você é um adolescente");
} else {
    console.log ("Você é um adulto")
}

