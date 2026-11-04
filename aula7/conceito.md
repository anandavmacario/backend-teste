JSON É COMO FICHA DE CADASTRO.


FICHA FÍSICA:  JSON    JSON:
Nome: João              "nome": "João"
Idade: 25               "idade": 25
Cidade: SP              "cidade": "SP"


É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)


<!-- ESTRUTURA -->
{
    "cachorro": {
        "nome": "Rex",
        "idade": 3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbe" ],
        "dono": {
            "nome": "Ana Luiza",
            "telefone": "119858-5858"


        }
    }
}


<!-- EXPLICAÇÃO -->
// STRING(TEXTO) - Sempre com aspas
"nome": "Rex"


// NUMBER (Número) - Sem aspas
"idade": 3,
"peso": 25.5


// BOOLEAN (true/false)
"vacinado": true


// ARRAY (Listas) - Com colchetes
"brinquedos":["bola", "osso"]


// OBJECT (Objeto) - Com chaves
"dono": {
    "nome": "João",
    "telefone": "1198585858"


}


// NULL (vazio)
"dataFalescimento": null