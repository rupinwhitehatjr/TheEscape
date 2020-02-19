// obtain game engine variable
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// player information
var player_value;
var powerup_1, powerup_2;

// storyline information
var jet_value;
var tent_value, tent_value_1;
var turret_value1 , turret_value2;
var radar_value;


// background information
var background_value;
var background_image_one, background_image_two, background_image_three, background_image_four , background_image_five , background_image_six, backgroundanimation;

// game information
var ground;
var game;
var intro;
var storyline;
var gameState = 0;
var score = 0;
var health = 100;

//enemy information
var enemy_value1 , enemy_value2 ,  enemy_value3 , enemy_value4 ,  enemy_value5 ,  enemy_value6 , enemy_value7 , enemy_value8 , enemy_value9 , enemy_value10 ,  enemy_value11 , enemy_value12 ,   enemy_value13 , enemy_value14 ;

//obstacle information
var mine_value1 , mine_value2 ,  mine_value3 , mine_value4 ,  mine_value5 , mine_value6 ,  mine_value7 , mine_value8 , mine_value9 ,  mine_value10 , mine_value11 ,  mine_value12 , mine_value13 , mine_value14, mine_value15 , mine_value16, mine_value17,  mine_value18 , mine_value19 ,  mine_value20 ,mine_value21 ,  mine_value22;
var truck_value1 , truck_value2 , truck_value3 ;

//rocket information
var rocket_value1 , rocket_value2;

//bomb information
var bomb_value1 ,  bomb_value2 ,  bomb_value3 ;

//background plane information
var plane_value , plane_value1 , plane_value2;

//medkit inforemation 
var medkit_value;

//rocket information
var rocket_value , rocket_value1;

//rocket blast information
var launch1 , launch2;

// bank note information
var banknote1,banknote2,banknote3,banknote4,banknote5,banknote6;
// Preload function to declare all the assets before rendering.
function preload() {
    // loadPlayerSprites();
   
    loadBackgroundSprites();
    loadMineBlastSprite();
}

function setup() {
    // create a base canvas
    createCanvas(1550,740);

    // Initialize game engine and gameworld;
    engine = Engine.create();
    world = engine.world;

    // Initialize game ground
    ground = new Ground(600,height,1200,20);
    
    // create an instance of the game object.
    game = new Game();
    gameState = game.getState();
    game.start();

    health = createSprite(100,200,20,20);
    health = 100;

    score = createSprite(100,200,20,20);
    score = 0;


    
}

function draw() {

    background(255);
    gameState = game.getState();

    if (gameState === 2) {
        console.log(gameState);
        game.storylineRun();
          
     
    }
    if (gameState === 3) {
      
        console.log(gameState);
        game.playbackground1();
    }
    if (gameState === 4) {
        console.log(gameState);
        game.playbackground2();
    }
    if (gameState === 5) {
        console.log(gameState);
        game.playbackground3();
    }
    if (gameState === 6) {
        console.log(gameState);
        game.playbackground4();
    }
    if (gameState === 7) {
        console.log(gameState);
        game.playbackground5();
    }
    if (gameState === 8) {
        console.log(gameState);
        game.playbackground6();
    }
    if (gameState === 9) {
        console.log(gameState);
        game.end();
    }

   
 


    fill("red");
    textFont("Arial");
          strokeWeight(4);
          stroke("red");
     textSize(30);
    text("LIFE : " + health, 50, 80);

    fill("red");
    textFont("Arial");
          strokeWeight(4);
          stroke("red");
     textSize(30);
    text("  SCORE : " + score, 30, 140);
   // if (gameState === 8) {
     //   console.log(gameState);
    //    game.playbackground6();
 //   }
  //Changing the color , stroke color , text size and font of the sprites
 
}




/*
    ----- HELPER FUNCTIONS -----
*/


function loadBackgroundSprites() {
    background_image_one = loadImage("sprite/BG11.png");
    backgroundanimation = loadImage("intro_sprite/abgt.jpg")
    background_image_two = loadImage("sprite/BG21.png");
    background_image_three = loadImage("intro_sprite/abgt.jpg");
    background_image_four = loadImage("sprite/BG31.png");
    background_image_five = loadImage("sprite/BG43.png");
    background_image_six = loadImage("sprite/BG51.png");
}

function loadMineBlastSprite(){
    mineblast = loadImage("sprite/b1.png","sprite/b2.png","sprite/b3.png","sprite/b4.png","sprite/b5.png","sprite/b6.png","sprite/b7.png","sprite/b8.png","sprite/b9.png","sprite/b10.png","sprite/b11.png");
}