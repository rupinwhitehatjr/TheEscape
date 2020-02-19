class Intro {
    constructor() {
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.title3 = createElement('h3');
        this.title4 = createElement('h3');
        this.title5 = createElement('h3');
        this.img = document.getElementById("introimg");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        this.img.style.visibility ='hidden';
    }

    display(){
        this.textsize = 500;
        this.title.html("THE ESCAPE");
        this.title.position(displayWidth/2 - 65, 0);
        this.title1.html("DESIGNED BY - AARON GHOSH");
        this.title1.position(displayWidth/2 - 160 , 40 );
        this.title2.html("“ THE ESCAPE ” is a survival and strategic game wherein the soldier after bombing an enemy radar station crashed his fighter aircraft by an Anti Aircraft rocket. Now he has to survive and escape from enemy territory and return safely to his own base. The soldier has to kill his enemy and survive from different kinds of enemy attacks while escaping. The soldier also need to save himself from different obstacles setup by the enemy in form of mines, weapon mounted trucks etc.");
        this.title2.position(displayWidth/2 - 650, 150 );
        this.title3.html("BEST OF LUCK SOLDIER !!!");
        this.title3.position(displayWidth/2 - 130, 350);
        this.title4.html("MADE IN - VISUAL STUDIO CODE - JAVA SCRIPT");
        this.title4.position(displayWidth/2 -250, displayHeight/2 + 200);
        this.title5.html("MENTOR AND INSTRUCTER- RICHARD SIR AND S ROSHINI MAAM ");
        this.title5.position(displayWidth/2 -320, displayHeight/2 - 350);
        this.button.position(displayWidth/2 - 75 , displayHeight/2 + 80);
       
       
        this.button.mousePressed(()=>{
          this.button.hide();
          this.title.hide();          
          this.title1.hide();
          this.title2.hide();
          this.title3.hide();
          this.title4.hide();
          this.title5.hide();
         // this.img.hide();
         this.img.style.visibility ='hidden';
          game.update(2);
        });
    }
}