let cor;
 let x;  //horizontal
let y;  //vertical

function setup() {
  createCanvas(400, 400);
  background(100, 00, 00);
  cor=color(random(0, 255), random(0, 255), random(0, 255));
  x = 200;
  y = 200;
 
  
  
}
//numeros em circle dizem tamanho e onde "x y" e por último "raio" 
function draw() {
   circle(x, y, 40);
  stroke ("yellow");
  fill (cor);


//o circulo segue o mouse

if(mouseX<x){
  x = x - 1;
}

if(mouseX>x){
  x = x + 1;
}
if(mouseY<y){
  y = y - 1
}
if(mouseY>y){
  y = y + 1;
 }
// (rgba) com numeros aleatórios o torna transparente

if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0,255), random(0, 100));
}

}