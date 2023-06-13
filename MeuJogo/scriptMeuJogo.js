const carinha = document.querySelector(".carinha");
const cacto = document.querySelector(".cacto");
const pontosCorridos = document.querySelector(".score");
let pulos = false;
let pontos = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "PraCima") | (e.code === "Space")) {
    pulo();
  }
});

function pulo() {
  if (!carinha.classList.contains("pulo")) {
    carinha.classList.add("pulo");
    pulos = true;

    setTimeout(() => {
      carinha.classList.remove("pulo");
      pulos = false;
    }, 1100);
  }
}
  
setInterval(() => {
  let carinhaBottom = parseInt(
    window.getComputedStyle(carinha).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 120 && cactoLeft < 230 && carinhaBottom <= 50 && !pulos) {

    alert(`Você perdeu! Sua pontuação foi: ${pontos}`);
    pontos = 0;
  }
  
  pontos++;
  pontosCorridos.innerHTML = `POTUAÇÃO: ${pontos}`;
  
}, 10);


function trocarImagens() {
  var image = document.getElementById("minhaImagem");
  if (image.src.match('image')) {
    image.src = "../image/dino2.gif";
  } else {
    image.src = "../image/dino2.gif";
  }
}

function trocarImagens2() {
  var image = document.getElementById("minhaImagem");
  if (image.src.match('image')) {
    image.src = "../image/dino3.gif";
  } else {
    image.src = "../image/dino3.gif";
  }
}

function trocarImagens3() {
  var image = document.getElementById("minhaImagem");
  if (image.src.match('image')) {
    image.src = "../image/dino4.gif";
  } else {
    image.src = "../image/dino4.gif";
  }
}

function trocarImagens4() {
  var image = document.getElementById("minhaImagem");
  if (image.src.match('image')) {
    image.src = "../image/dino5.gif";
  } else {
    image.src = "../image/dino5.gif";
  }
}

