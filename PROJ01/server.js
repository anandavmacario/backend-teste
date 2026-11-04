// Cronometro no terminal

//===================================
// Bloco 01:
//===================================
// require = "traga para cá uma ferramneta pronta!"
// readline = "é a ferramenta do Node que sabe conversar com o teclado"
const readline = require('readline');

// process.stdin = a Entrada do programa (teclado)
// Esta linha manda o Node AVISAR o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Mensagemde boas-vindas
console.log('🕑 Cronômetro iniciado!');
console.log('p= pusar/cpntinuar | r= reseta | Ctrl+C = Sair')

//===================================
// Bloco 02: A memória do cronômetro
//===================================
//  tempo guarda quantos segundos já passaram
let tempo = 0;
// Rodando é um interruptor de luz: true = contando, false = pausando
let rodando = true;

//===================================
// Bloco 03: Deixando o tempo bonito (mm:ss)
//===================================

function formatar(total){;
    // Math.floor arredonda um n[umero para baixo, sempre retornando um nímero inteiro.
    // Exemplo 65/60 = 1.08... -> Math.floor joga fora os decimais -> 1
    const min = Math.floor(total/60);
    
    // O símbolo % dá o RESTO da diivsão
    const seg = total % 60;
    
    // String (...) transformar o numero em texto
    //  pedStart (2, 0) = "Se tiver menos de 2 caracteres, complete com 0 na frente"
    // Assim "5" vira "05", depois nó sjuntamos os pegaços com o ":"
    
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0');
}


//===================================
// Bloco 04: O coração do programa
//===================================

// setinterval = "repita isso a cada X milissegundo"
// 1000 milisegundos = 1 segundo (veja o número no final do bloco)
setInterval(() => {
    // só conta se o interruptor estiver ligado
    if(rodando) {
        // Soma 1 em tempo. É o mesmo que: tempo = tempo +1
        tempo ++;
        // Limpa a tela para o número "mudar no mesmo lugar"
        console.clear ();
        console.log('🕑' + formatar(tempo));
    }
}, 1000);


//===================================
// Bloco 05: Ouvindo o teclado
//===================================

process.stdin.on ('keypress', (letra, tecla) => {
    // Foi a tecla P? (=== compara se os dois lados são iguais)
    if (tecla.name == 'p') {
        // O ! INVERTE o valor: true vira false, false vira true
        rodando = !rodando;
        // Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
        // É um if de uma linha só
        console.log(rodando ? 'Continuando': 'Pausado');

        // Senão, foi a tecla R?
    } else if (tecla.name === 'r') {
        tempo = 0;
        console.clear ();
        console.log('🕑' + formatar(tempo));
        console.log('🔁 Resetado')


    } else if (tecla.ctrl && tecla.name === 'c'){
        console.log('👋🏾\n Até mais!');
        process.exit();

    }
});