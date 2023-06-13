var sPerguntas = [["CARAMBOLA", "FRUTA"], ["JABOTICABA", "FRUTA"],
["JANBO", "FRUTA"], ["CUPUAÇU", "FRUTA"],
["PITONBA", "FRUTA"], ["FORTALEZA", "CIDADE"],
["HOLAMBRA", "CIDADE"], ["TERESÓPOLIS", "CIDADE"],
["HORTOLÂNDIA", "CIDADE"], ["CARAPICUIBA", "CIDADE"],
["ALICATE", "FERRAMENTA"], ["MARTELO", "FERRAMENTA"]]


//Matriz para fazer o shuffle
var iSorteados = [];
//Conta a quantidade de jogadas feitas para buscar no vetor de Sorteados
var iJogada = 0;
//Armazena a palavra da vez
var sPalavraSorteada;
//Conta as letras certas
var iAcertos = 0;
//Conta as letras erradas
var iErro = 0;
//Guarda a letra clicada para poder desabilitá-la
var cLetraClicada = "";
//Vetor com as letras do teclado para facilitar a busca do Id 
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
//Variaveis que contam os acertos e erros
var iCertas = 0, iErradas = 0;

//******************************************************************** */


// Função para criar os espaços das letras 
function criaLetras(sPalavra) {
    //Busca o formulario
    var formula = document.getElementById("tenta");
    var j = 0;
    console.log("PALAVRA: " + sPalavra);
    //for do tamanho da palavra 
    for (var i = 0; i < sPalavra.length; i++) {
        //Se for diferente de espaço (32)
        if (sPalavra[i].charCodeAt(0) != 32) {
            //Cria input
            var letra = document.createElement("input");
            //Define os atributos para o INPUT
            //Tipo
            letra.setAttribute("type", "text");
            //Name
            letra.setAttribute("name", "tenta" + j);
            //id
            letra.setAttribute("id", "tenta" + j);

            //id 
            letra.setAttribute("id", "tenta" + j);
            //Tamanho máximo 
            letra.setAttribute("maxlength", 1);
            //Tamanho de exibição 
            letra.setAttribute("size", 1);
            //Desabilita a edição 
            letra.setAttribute("disabled", true);
            //Adiciona o INPUT no FORMULARIO
            formula.appendChild(letra);
            j++;
        } else {
            //Quando for espaço, ele separa 20px a esquerda 
            //e 1px a direita do input anterior 
            document.getElementById("tenta" + (j - 1)).
                style.margin = "0px 20px 0px 1px";
        }
    }
    //Remove todos os espaços e acentos 
    sPalavraSorteada = limpa(sPalavra);
    //Exibe o tema e a quantidade de letras 
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1] + " - " + sPalavraSorteada.length + " letras";
}

//****************************************************
// Função que confere a letra clicada
function sorteia() {
    //Insere os números dentro do vetor conforme a quantidade de itens da matriz
    for (var m = 0; m < sPerguntas.length; m++) {
        iSorteados.push(m);
    }
    //Faz a mistura
    iSorteados = shuffleArray(iSorteados);
    //Chama a função que separa as letras das palavras
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}



// Função que confere a letra clicada 

function Confere(cLetra) {
    //Atribui a letra a uma variável global
    cLetraClicada = cLetra;
    //Cria variável que definirá se a letra foi encontrada na palavra
    var lAchou = false;

    //Percorre as letras da palavra sorteada 
    for (var i = 0; i < sPalavraSorteada.length; i++) {
        //Se a letra clicada, existir na palavra
        if (cLetra == sPalavraSorteada.charAt(i)) {
            //Insere a exibição da letra
            document.getElementById("tenta" + i).value = cLetra;

            //Conta acertos
            iAcertos++;
            //Exibe acertos
            document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos; //Indica que achou a letra na palavra
            lAchou = true;
        }
    }


    //Se não achou a letra
    if (lAchou == false) {
        //Conta o erro
        iErro++;
        //insere a imagem conforme a quantidade de erro
        document.getElementById("imagem").src = "../image/forca" + (iErro + 1) + ".png";
    }
}
//*

/*Função que verifica se o jogo acabou*/
function acabou() {
    //Cria variável que indicará se o jogo acabou
    var lAcabou = false;

    //se a quantidade de acertos for igual ao tamanho da palavra
    if (iAcertos == sPalavraSorteada.length) {
        //se a quantidade de acertos for igual ao tamanho da palavra 
        lAcabou = true;
        //Exibe a mensagem
        {
            Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Você acertou!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        iCertas++;
        //Se a quantidade de letras erradas chegou a 6
    } else if (iErro == 6) {
        lAcabou = true;
        //Exibe a mensagem 
        {
            Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Tente novamente!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        iErradas++;
    }

    document.getElementById(cLetraClicada).disabled = true

    if (lAcabou) {
        //Remove todos os INPUTS
        for (var i = 0; i < sPalavraSorteada.length; i++) {
            document.getElementById("tenta" + i).remove();
        }
        //Incrementa Jogadas para ir para próxima palavra
        iJogada++;
        //Exibe quantidade de palavras jogadas CERTAS e ERRADAS
        document.getElementById("palcerta").innerHTML = "PALAVRAS CERTAS: " + iCertas + "<br>PALAVRAS ERRADAS: " + iErradas
        //Chama função que criará novo jogo
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        iAcertos = 0;
        iErro = 0;
        //Inicializa variáveis
        document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos; //Volta imagem da forca

        document.getElementById("imagem").src = "../image/forca" + (iErro + 1) + ".png";

        for (var i = 0; i < sLetras.length; i++) {
            document.getElementById(sLetras[i]).disabled = false
        }
    }
}

//******************************************************************************** */

function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

//**************************************************************** */
function limpa(sItem) {
    var sResultado = sItem

    sResultado = replaceAll(sResultado, " ", "");
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado;
}

//Função para substituir todas as ocorrências
function replaceAll(str, de, para) {
    //Procura a ocorrência 
    var pos = str.indexOf(de);
    //Se achou
    while (pos > -1) {
        //substitui
        str = str.replace(de, para); //e procura novamente a ocorrência
        pos = str.indexOf(de);
    } //retorna a string sem acentos e espaços
    return (str);
}

function shake(e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;
    var start = (new Date()).getTime();
    animate();
    function animate() {
        var now = (new Date()).getTime(); // Get current time
        var elapsed = now - start; // How long since we started
        var fraction = elapsed / time;
        // What fraction of total time?
        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";
            // We're aiming for a smooth 40 frames/second animation. 
            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            // Otherwise, the animation is complete
            if (oncomplete) oncomplete(e);
            // Invoke completion callback
        }
    }
}
function shakeme(event) {
    shake(event.target);
}

