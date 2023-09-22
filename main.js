let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;


contexto.strokeStyle = "black"; 
contexto.fillStyle = "darkblue";  

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function(event){
    if(desenhando){
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
});

let fillButton = document.getElementById("fillButton");

fillButton.addEventListener("click", function() {
   
    contexto.fillStyle = "darkblue";
    
   
    contexto.fillRect(0, 0, canvas.width, canvas.height);
});

let preencherDesenhoButton = document.getElementById("preencherDesenho");

preencherDesenhoButton.addEventListener("click", function() {
    // Define a cor de preenchimento como a cor do pincel atual
    contexto.fillStyle = corPincel;
    
    // Preenche o espaço delimitado pelo desenho
    contexto.fill();
});

// Pega os botões de cores
let blackButton = document.getElementById("black");


// Defina a cor inicial do pincel
let corPincel = "black"; // Inicialmente, o pincel é preto

// Adicione eventos de clique aos botões de cores
blackButton.addEventListener("click", function() {
    corPincel = "black"; // Defina a cor do pincel como preto
});


canvas.addEventListener("mousedown", function(event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    contexto.strokeStyle = corPincel; 
});

// Obtenha o contexto de desenho 2D do <canvas>
const ctx = canvas.getContext('2d');

// Defina a grossura do pincel
const grossuraDoPincel = 15; // Defina o valor desejado em pixels
ctx.lineWidth = grossuraDoPincel;

// Agora você pode desenhar com a grossura de pincel definida
