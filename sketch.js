var balloon,balloonImg;
var background,backgroundImg;

function preload() {
  balloonImg = loadImage("balloon01.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(800,400);

  balloon = createSprite(250,100,20,20);
  balloon.addImage(balloonImg,"Balloon");
  balloon.scale = 0.3;
}

function draw() {
  background(backgroundImg,"Background"); 

  if(keyDown(LEFT_ARROW) && balloon.x > 40){
    balloon.x = balloon.x - 5;
    }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 5;
  }
  if(keyDown(UP_ARROW) && balloon.y > 50){
    balloon.y = balloon.y - 3;
  }
  if(keyDown(DOWN_ARROW) && balloon.y < 170){
    balloon.y = balloon.y + 3;
  }

  balloon.scale = (height/2 - balloon.y)/100;
  console.log(balloon.y);

  drawSprites();

  if(frameCount < 200){
    fill("white");
    textAlign(CENTER,CENTER)
    text("Use Arrow Keys to move the Balloon!",width/2,350);
  }

}

function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readValue(data) {
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;

}

function showError() {
  console.log("Error in connecting to Database");
}

function writePosition(x,y) {
  database.ref('balloon/position').set({
      'x' : position.x + x,
      'y' : position.y + y,
  })    

}