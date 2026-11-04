//SELECIONANDO ELEMENTOS DO DOM//

//Selecionando por ID
//console.log(document.getElementById("titulo"));
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let Tim = document.getElementById("Tim");

//Selecionando por classe
let caixas = document.getElementsByClassName("box");

//Mostrar o console.log
console.log(titulo);
console.log(caixas);
console.log(Tim)

//FUNÇÃO PARA ALTERAR CONTEUDO
function alterar(){
    titulo.innerHTML = "Masky?"
    subtitulo.innerHTML = "Tim."
    paragrafo.innerHTML = "Tim Wright."
    Tim.src = "https://cdn.shopify.com/s/files/1/0125/8261/7145/products/197b379a1c0e33dc035938e2814ee404_909c117e-b142-4dc8-8766-ca805cd87943_1000x.png.webp?v=1638476798" 
}
//Alterando elemento da classe 
caixas[0].innerText = "Primeiro parágrafo alterado"
caixas[1].innerText = "Segundo parágrafo alterado"

//Alterando imagem