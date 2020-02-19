class Game {
    constructor() {
        this.currentState = 1; 
        this.level = 0;
    }

    getState() {
        return this.currentState;
    }

    update(state) {
        this.currentState = state;
    }

    start() {
        //creating intro of the game
        intro = new Intro();
        intro.display();

        //creating a jet variable
          jet_value = new Jet(0,80,20,20);
  
        //creating turret variable  
          turret_value1 = new Turret(800,550,20,20);
          turret_value2 = new Turret(1200,550,20,20);

        // creating tent variable
         tent_value = new Tent(100,570,20,20);
         tent_value_1 = new Tent(1400,570,20,20);

         //creating radar variable 
        radar_value = new Radar(400,500,20,20);

        //creating a player variable
        player_value = new Player(200,565);
      
        //creating a ground variable
        ground = new Ground(600,900,1200,90);

        //creating the enemy variables
        enemy_value1 = new Enemytype1(400,550,20,20);
        enemy_value2 = new Enemytype1(1100,550,20,20);
        enemy_value3 = new Enemytype1(800,550,20,20);
        enemy_value4= new Enemytype1(300,550,20,20);
        enemy_value5 = new Enemytype2(900,550,20,20);
        enemy_value6 = new Enemytype3(1400,550,20,20);
        enemy_value7 = new Enemytype4(1600,535,20,20);
        enemy_value8 = new Enemytype5(1600,80,40,40);
        enemy_value9 = new Enemytype1(600,550,40,40);
        enemy_value10 = new Enemytype2(1300,550,40,40);
        enemy_value11 = new Enemytype2(1400,550,40,40);
        enemy_value12 = new Enemytype1(300,550,40,40);
        enemy_value13 = new Enemytype2(400,550,20,20);
        enemy_value14= new Enemytype1(950,550,20,20);

        //creating the mine variables
        mine_value1 = new Obstacle(1200,600,20,20);
        mine_value2 = new Obstacle(1300,600,20,20);
        mine_value3 = new Obstacle(500,600,20,20);
        mine_value4 = new Obstacle(600,600,20,20);
        mine_value5 = new Obstacle(500,600,20,20);
        mine_value6 = new Obstacle(1100,600,20,20);
        mine_value7 = new Obstacle(700,600,20,20);
        mine_value8 = new Obstacle(1300,600,20,20);
        mine_value9 = new Obstacle(300,600,20,20);
        mine_value10 = new Obstacle(500,600,20,20);
        mine_value11 = new Obstacle(700,600,20,20);
        mine_value12 = new Obstacle(900,600,20,20);
        mine_value13 = new Obstacle(1100,600,20,20);
        mine_value14 = new Obstacle(1400,600,20,20);
        mine_value15 = new Obstacle(700,600,20,20);
        mine_value16 = new Obstacle(900,600,20,20);
        mine_value17 = new Obstacle(500,600,20,20);
        mine_value18 = new Obstacle(700,600,20,20);
        mine_value19 = new Obstacle(900,600,20,20);
        mine_value20 = new Obstacle(1300,600,20,20);
        mine_value21 = new Obstacle(300,600,20,20);
        mine_value22 = new Obstacle(1100,600,20,20);

        
       // creating the truck variable
        truck_value1 = new Obstacletype2(1500,555,20,20);
        truck_value2 = new Obstacletype3(2000,548,20,20);
        truck_value3 = new Obstacletype4(2500,545,20,20);

        //creating the bomb variable
        bomb_value1 = new Obstacletype5(1300,80,20,20);
        bomb_value2 = new Obstacletype5(700,80,20,20);
        bomb_value3 = new Obstacletype5(200,80,20,20);

        // creating the plane variable
        plane_value = new Plane(1100,0,20,20);
        plane_value1 = new Plane1(0,50,20,20);
        plane_value2 = new Plane1(-200,100,20,20);

        medkit_value = new  PowerUps(650,570,20,20)
        
        
       // enemy_value1.scale = 100;

    // creating the rocket variable
      rocket_value = new Rocket(920,400,20,20)
      rocket_value1 = new Rocket(920,400,20,20)

    // creting the rocket launvh variable
      launch1 = new Launch(900,400,20,20);
      launch2 = new Launch(900,400,20,20);

    // creating the bank note variables
    banknote1 = new BankNotes(500,580,20,20);
    banknote2 = new BankNotes(700,580,20,20);
    banknote3 = new BankNotes(1100,580,20,20);
    banknote4 = new BankNotes(500,580,20,20);
    banknote5 = new BankNotes(200,580,20,20);
    banknote6 = new BankNotes(600,580,20,20);
    }

storylineRun(){
    background("white");
    background(backgroundanimation);
     jet_value.display();
     tent_value.display();
     tent_value_1.display();
     turret_value1.display();
     turret_value2.display();
     radar_value.display();
    jet_value.body.position.x += 4;
    jet_value.body.position.y += 1;

    if(jet_value.body.position.y > 500){
        this.update(3);
    }
}


   //creating  gamstate 3 , first level of the game
    playbackground1() {
        background("white");

        //giving the background image details
        background(background_image_one);

        //displaying the variables

     
      banknote1.display();
       enemy_value1.display();
       enemy_value2.display();
       enemy_value3.display();
       player_value.display();
       mine_value1.display();
       mine_value2.display();
       mine_value3.display();
       mine_value4.display();
        ground.display();
        // drawSprites();

       
     if(player_value.body.position.x > 498 && player_value.body.position.x < 502 && player_value.body.position.y >540){
         score = score + 10;
         banknote1.body.position.x = 12390;
     }
     if(player_value.body.position.x > 300){
         rocket_value.body.position.x += -10;
         rocket_value.body.position.y += -3;
         rocket_value.display();
         launch1.display();
         
     }
     if(player_value.body.position.x > 1100){
        rocket_value1.body.position.x += -10;
        rocket_value1.body.position.y += -3;
        rocket_value1.display();
        launch2.display();
    }
    
      //giving a condition to go on to the second level of the game when the player reaches the end of the screen
        if(player_value.body.position.x > 1470 ){
            this.update(4);
            player_value.body.position.x = 100;
        }

      //giving a condition so that the enemy can hit the player or reduce the health of the player by giving the co-ordinates of the enemy
      //instead touching
        if(player_value.body.position.x >399 && player_value.body.position.x < 401 && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x >1099 && player_value.body.position.x < 1101 && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x >799 && player_value.body.position.x < 801 &&player_value.body.position.y >540){
            health = health - 20;
        } 

    }

    //creating gamestate 4 , second level of game
     playbackground2() {
        background("white");

        //giving the details about the background image
        background(background_image_two);

       //displaying the sprites
        enemy_value4.display();
        enemy_value5.display();
        enemy_value6.display();
        enemy_value8.display();
       banknote2.display();
        mine_value5.display();
        mine_value6.display();
        mine_value7.display();
        mine_value8.display();
        player_value.display();
        
        ground.display();
         //giving a velocity to the enemy var , heli
         enemy_value8.body.position.x += -8;
        console.log("CHANGE BG");
        drawSprites();

        if(player_value.body.position.x > 698 && player_value.body.position.x < 702 && player_value.body.position.y >540){
            score = score + 10;
            banknote2.body.position.x = 12390;
        }
        //giving a condition so that the heli can drop the bombs in specific places
        if(enemy_value8.body.position.x < 1300){
           bomb_value1.body.position.y += 10;
           bomb_value1.display();
        }
        if(enemy_value8.body.position.x < 700){
            bomb_value2.body.position.y += 10;
            bomb_value2.display();
         }
         if(enemy_value8.body.position.x < 300){
            bomb_value3.body.position.y += 10;
            bomb_value3.display();
         }
         //giving a condition so that the player can move to the third level , gamestate 5
        if(player_value.body.position.x > 1470 ){
            this.update(5);
            player_value.body.position.x = 100;
        }

        // Giving a condition so that the healt of soldier can be reduced by the enemies
        if(player_value.body.position.x >299 && player_value.body.position.x < 301 && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x >899 && player_value.body.position.x < 901  && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x >1399 && player_value.body.position.x < 1401  && player_value.body.position.y >540){
            health = health - 20;
        } 
       
    
    }

    // Creating the third level of the game, gamestate 5
    playbackground3() {
        background("white");

        // assigning the image to the background
        background(background_image_three);

        //displaying the variables and assigning them velocity
        truck_value1.display();
        truck_value1.body.position.x += -8;
        truck_value2.display();
        truck_value2.body.position.x += -8;
        truck_value3.display();
        truck_value3.body.position.x += -8;
        player_value.display();
        banknote3.display();
        ground.display();
        console.log("CHANGE BG");
        
        if(player_value.body.position.x > 1098 && player_value.body.position.x < 1102 && player_value.body.position.y >540){
            score = score + 10;
            banknote3.body.position.x = 12390;
        }
     //creating a condition to the truck variables so that they gon again and again as a loop
       if(truck_value1.body.position.x < -50){
           truck_value1.body.position.x = 1500;
       }
       if(truck_value2.body.position.x < -50){
        truck_value2.body.position.x = 1500;
     }
    if(truck_value3.body.position.x < -50){
        truck_value3.body.position.x = 1500;
    }


      //creating a condition so that the player can move to the fifth level of the game
        if(player_value.body.position.x > 1470 ){
            this.update(6);
            player_value.body.position.x = 100;
        }

      
    }

    //creating the fourth level of the game, gamestate 6
    playbackground4() {
        background("white");

        // assaining the image to the background
        background(background_image_four);
       
       // Assaigning the velovity to the plane (animation of plane crashing) var
        plane_value.body.position.x += -9;
        plane_value.body.position.y += 2;
      
      
        // Displaying the variables
        plane_value.display();
        enemy_value9.display();
        enemy_value10.display();
        mine_value9.display();
        mine_value10.display();
        mine_value11.display();
        mine_value12.display();
        mine_value13.display();
        mine_value14.display();
        player_value.display();
        ground.display();
        banknote4.display();
        console.log("CHANGE BG");
        

        if(player_value.body.position.x > 498 && player_value.body.position.x < 502 && player_value.body.position.y >540){
            score = score + 10;
            banknote4.body.position.x = 12390;
        }
        // Creating a condition so that the player can move on to the sixth level, gamestate 7
        if(player_value.body.position.x > 1470 ){
            this.update(7);
            player_value.body.position.x = 100;
        }

        // Creating a condition so that the enemy can reduce the player health
        if(player_value.body.position.x >399 && player_value.body.position.x < 401 && player_value.body.position.y >540){
            health = health - 20;
        }

        if(player_value.body.position.x >1299 && player_value.body.position.x < 1301 && player_value.body.position.y >540){
            health = health - 20;
        } 
      
    }

    // Creating the fifth level of the game, gamestate 7
    playbackground5() {
        background("white");

        // Assaigning the images to the background
        background(background_image_five);

       // Displaying the variable
       plane_value1.display();
       plane_value2.display();
       enemy_value13.display();
       enemy_value14.display();
       mine_value18.display();
       mine_value19.display();
       mine_value20.display();
       mine_value21.display();
       mine_value22.display();
       banknote5.display();

       // Assaigning the velocity to the plane
       plane_value1.body.position.x += 6;
       

       if(player_value.body.position.x > 198 && player_value.body.position.x < 202  && player_value.body.position.y >540){
        score = score + 10;
        banknote5.body.position.x = 12390;
    }
       // Creating a condition so that when the player position in x axis is greater than 300 so that the plane variable is assigned a velocity
       if(player_value.body.position.x >500){
           plane_value2.body.position.x += 6;
       }
        player_value.display();
        ground.display();
        console.log("CHANGE BG");
        
       
        // Creating a condition so that the player can move on to the sixth level
        if(player_value.body.position.x > 1470 ){
            this.update(8);
            player_value.body.position.x = 100;
        }

        // Creating a condition so that the enemies can reduce the health of the player
        if(player_value.body.position.x >399 && player_value.body.position.x < 401  && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x >1099 && player_value.body.position.x < 1101  && player_value.body.position.y >540){
            health = health - 20;
        } 

       
    }

    // Creating the sixth level of the game, gamestate 8
    playbackground6() {
        background("white");

        // Assigning the image to the background
        background(background_image_six);

        // Displaying the sprites
        enemy_value7.display();
        enemy_value11.display();
        enemy_value12.display();
        mine_value15.display();
        mine_value16.display();
        mine_value17.display();
        player_value.display();
        medkit_value.display();
        ground.display();
        banknote6.display();
        console.log("CHANGE BG");
        
        if(player_value.body.position.x > 598 && player_value.body.position.x < 602  && player_value.body.position.y >540){
            score = score + 10;
            banknote6.body.position.x = 12390;
        }
        // Creating a condition so that the enemies can reduce the health of the player
        if(player_value.body.position.x >498 && player_value.body.position.x < 502  && player_value.body.position.y >540){
           health = health + 50;
        }
        if(player_value.body.position.x >399 && player_value.body.position.x < 401  && player_value.body.position.y >540){
            health = health - 20;
        } 
        if(player_value.body.position.x > 949&& player_value.body.position.x <951  && player_value.body.position.y >540){
            health = health - 20;
            medkit_value.body.position.x = 9509;
        } 
      
        // Creating a condition in which when enemy 7 (tank) position on x axis is more than 1200 then velocity of enemy 7 is minus 4
      
            enemy_value7.body.position.x += -4; 
        

        // Creating a condition so that the player can move again to the first level in a closed loop making the game neverending
        if(player_value.body.position.x > 1470 ){
            this.update(3);
            player_value.body.position.x = 100;
        }
       
    }

    end(){
        background("white");
      
      

    }

    }
 








 