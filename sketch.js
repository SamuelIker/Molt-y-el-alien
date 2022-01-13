var Molt, MoltImg, MoltImg2;
var lasersRojos1, lasersRojos1Img;
var button, buttonImg;
var gameState = 'inicio';
var player;
var name;
var database;
var gameState = 0;
var form;
var sueloArriba, sueloAbajo, edges;
var laser;
var laserRojo1Img, laserRojo2Img, laserVerde1Img;
var laserGroup;
var vida = 3;
var vida1, vida2, vida3;
var corazonesImg, corazones;
var reset, resetImg;


function preload() {
    backgroundImg = loadImage("imagenes/fondo 1.jpeg");
    MoltImg = loadImage('imagenes/Molt.png');
     buttonImg = loadImage('imagenes/boton de inicio.png');
     MoltImg2 = loadImage('imagenes/Molt imagen 2.png')

     laserRojo1Img = loadImage('imagenes/Lasers rojos.png');
     laserRojo2Img = loadImage('imagenes/lasers rojos 2.png');
     laserVerde1Img = loadImage('imagenes/Laser verde.png');
     corazonesImg = loadImage('imagenes/corazones.png');

     resetImg = loadImage('imagenes/reset.png');
     
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  
    fondo = createSprite(850,400,400,20);
    fondo.addImage(backgroundImg)
    fondo.scale = 1.3;    
  
    Molt = createSprite(750, 400, 20, 20);
    Molt.addImage(MoltImg);
    Molt.scale = 0.5;

    Molt2 = createSprite(350, 400, 20, 20);
    Molt2.addImage(MoltImg2);
    Molt2.scale = 0.5;
    Molt2.visible = false;
    
    vida1 = createSprite( 70, 70, 50, 50);
    vida2 = createSprite( 140, 70, 50, 50);
    vida3 = createSprite( 210, 70, 50, 50);

    vida1.addImage(corazonesImg);
    vida2.addImage(corazonesImg);
    vida3.addImage(corazonesImg);

     vida1.scale = 0.2;
     vida2.scale = 0.2;
     vida3.scale = 0.2;



    vida1.visible = false;
    vida2.visible = false;
    vida3.visible = false;

    button = createSprite( 1000, 370, 100, 100);
    button.addImage(buttonImg);
    button.scale = 0.5;

    sueloArriba = createSprite(700,-3, 1500, 50);
    sueloAbajo = createSprite(700,870, 1500, 50);
    sueloArriba.visible = false;
  
    Molt2.debug = true;
    Molt2.setCollider('rectangle', 0, 0, 305, 305);

   resetButton = createSprite( 700, 370, 200 , 200);
   resetButton.addImage(resetImg);
   resetButton.visible = false;
   resetButton.scale = 0.8
   


    
    

   
   edges = createEdgeSprites();

  laserGroup = new Group()
    

}

function draw(){
    background(100);

    if (gameState === 'play') {
 
button.visible = false;
Molt.visible = false;
Molt2.visible = true;
fondo.velocityX = - 2;



 Molt2.collide(sueloArriba);

 if (fondo.x < 600 ) {
 fondo.x = 700;
 }   

 if (keyDown('space')) {
     Molt2.velocityY = -11;
 }

Molt2.velocityY = Molt2.velocityY + 0.8;
vida1.visible = true;
vida2.visible = true;
vida3.visible = true;


if (Molt2.isTouching(laserGroup)) {



     laserGroup.setVelocityXEach(0);
     fondo.velocityX = 0;
     Molt2.velocityY = 0;
     laserGroup.setLifetimeEach(-1);
     resetButton.visible = true;
     
     mousePressed(resetButton);

    

       
}

if (gameState === 'playCon2Vidas') {

     
    vida3.visible = false;


    laserGroup.destroyEach();


 fondo.velocityX = - 2;



 Molt2.collide(sueloArriba);

 if (fondo.x < 600 ) {
 fondo.x = 700;
 }   




if (keyCode === 32) {
    Molt2.velocityY = - 11;
}
vida1.visible = true;
vida2.visible = true;

Molt2.velocityY = Molt2.velocityY + 0.8;

   

    

}

   
   console.log(vida);
    
lasers();
   

    }

   
    drawSprites();

if (gameState === 0) {
    mousePressed(button);
        fill(0);
        textSize(70);
    text('Molt y el Alien', 550, 200);    
    }   


}

function mousePressed(boton) {
    if(mousePressedOver(button)) {
        gameState = 'play';
      }
  
      if(mousePressedOver(resetButton)) {
        gameState = 'playCon2Vidas'
        resetButton.visible = false;
      }

    }

function lasers() {

     if (frameCount % 100 === 0) {
         
         laser = createSprite( 1600, 400, 50, 10);
         laser.shapeColor = ('red');
         laser.velocityX = - 7;

         laser.y = Math.round(random(20, 700));

         var rand = Math.round(random(1, 3));

         switch(rand) {
             case 1: laser.addImage(laserRojo1Img);
             break;

             case 2: laser.addImage(laserRojo2Img);
             break;

             case 3: laser.addImage(laserVerde1Img);
             break;

             default:
                 break;

         }

         laserGroup.add(laser);
         laser.scale = 0.5;

         laser.debug = true;
         laser.setCollider('rectangle', - 200, 0, 50, 50
         );

         laser.lifetime = 250;
     }
}
