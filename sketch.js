var f1, f2, f3, f4;
var fruit, fruitGroup
var sword;
var swordImage;
var score=0;
var PLAY = 1;
var END = 0;
var gameState = 1;
var enemyGroup, enemy, enemyImage
var gameOverImage
var cuttingSound
var gameoverSound

function preload() {
  swordImage = loadImage("sword.png");
  f1 = loadImage("fruit1.png");
  f2 = loadImage("fruit2.png");
  f3 = loadImage("fruit3.png");
  f4 = loadImage("fruit4.png");
  swordImage = loadImage("sword.png");
  enemyImage = loadAnimation("alien1.png","alien2.png")
  gameOverImage=loadImage("gameover.png")
  cuttingSound=loadSound("knifeSwooshSound.mp3")
  gameoverSound=loadSound("gameover.mp3")
}

function setup() {
  createCanvas(600, 600);

  sword = createSprite(40, 200, 200, 20);
  sword.addImage(swordImage);

enemyGroup=new Group();
fruitGroup=new Group();

}



function draw() {
  background("lightBlue");
  //console.log("this is ", gameState);
  text("Score: " + score, 500, 50)

  if (gameState === PLAY) {
    sword.y = World.mouseY;
    sword.x = World.mouseX;
  }
  
  if (gameState===END){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.velocityY=0;
    fruitGroup.velocityX=0;
    enemyGroup.velcoityY=0;
    enemyGroup.velocityx=0;
    sword.addImage(gameOverImage);
    sword.x=300;
    sword.y=300;
    sword.scale=1.5
  }



if (fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach()
  cuttingSound.play()
  score=score+2
    }
if(enemyGroup.isTouching(sword)){
 gameState=END
  gameoverSound.play();
} 







  drawSprites()
  fruits()
  enemies()

}




function fruits() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(400, 200)
    fruit.scale=0.2
 var position=Math.round(random(1,2))
 if (position===1){
   fruit.x=600
   fruit.velocityX=-(7 +score/4)
 }
    else if (position===2){
      fruit.x=0
      fruit.velocityX=(7+score/4)
    }
    
    console.log(fruit.velocityX);
    r = Math.round(random(1, 4))
    switch (r) {
      case 1:
        fruit.addImage(f1)
        break;
      case 2:
        fruit.addImage(f2);
        break;
      case 3:
        fruit.addImage(f3);
        break;
      case 4:
        fruit.addImage(f4);
        break;
    }

    fruit.y = Math.round(random(50, 340));

    fruit.velocityX = -7;

    fruit.setlifetime = 100;

 fruitGroup.add(fruit);
  }
}

function enemies() {
  if(frameCount%200===0){
  enemy = createSprite(400, 200, 20, 20);
  enemy.addAnimation("moving", enemyImage);
  enemy.setLifetime = 50;
      enemy.velocityX = -(8 + (score /10));

enemyGroup.add(enemy);
  }
}