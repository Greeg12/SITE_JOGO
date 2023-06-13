// var multiplicando = 15;
// var limite = 30;

// var contador = 1;
// var numeroEscolhido = parseInt(prompt("Deseja ver qual tabuada?"));

// while(isNaN(numeroEscolhido)) {
//     numeroEscolhido = parseInt(prompt("Isto não é um numero, digite a tabuada que quer ver?"));
// }

// while (contador <= limite){
//     document.write("<br>" + numeroEscolhido + " x "  + contador + " = " + (numeroEscolhido * contador));
//      contador++;
// }


//----------------------------
function mudeNome(){

    var nomeEscolhido = document.getElementById("nomeDigitado").value;

    document.getElementById("nomeDoJogo").innerHTML = nomeEscolhido;
    document.getElementById("nomeDoJogo2").innerHTML = nomeEscolhido;  
    document.getElementById("nomeDoJogo3").innerHTML = nomeEscolhido;  
    document.getElementById("nomeDoJogo4").innerHTML = nomeEscolhido;  
    document.getElementById("nomeDoJogo5").innerHTML = nomeEscolhido;                      
}

//-----------------------------------


// var zoo = ['canguru', 'leão', 'lobo']

// console.log(zoo)

// zoo.push = 'Elefante'

// console.log(zoo)

// for(var i=0; i<zoo.length;i++){
//     console.log("O animal é " + zoo[i])
// }

// var zoo = ['canguru', 'leão', 'lobo']
// zoo.forEach(animal => console.log("O animal é " + animal))
