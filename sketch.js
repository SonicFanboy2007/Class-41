var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("../images/track.jpg")
  car1img = loadImage("../images/Car1.png")
  car2img = loadImage("../images/Silver.png")
  car3img = loadImage("../images/Eggman.png")
  car4img = loadImage("../images/Scrouge.png")
  ground = loadImage("../images/ground.png")
  titleScreen = loadImage("../images/Title screen.png")
  theme = loadSound("../images/theme.mp3")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end()
  }
}
