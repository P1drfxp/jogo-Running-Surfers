var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage ("path.png"); 
  boyImg=loadAnimation ("Runner-1.png","Runner-2.png"); 
 
}

function setup(){
  
  createCanvas(600,600);
 //crie um sprite para a pista
 path=createSprite(300,300) 

 path.addImage(pathImg);
//adicione uma imagem para a pista
path.velocityY=-2
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy=createSprite(170,170);
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.addAnimation("correndo",boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
