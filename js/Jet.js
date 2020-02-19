class Jet {
    constructor(x, y ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10 ,options);
        this.body.scale = 1;
        this.image = loadAnimation("./intro_sprite/jetD1.png","./intro_sprite/jetD2.png","./intro_sprite/jetD3.png","./intro_sprite/jetD4.png","./intro_sprite/jetD5.png","./intro_sprite/jetD6.png","./intro_sprite/jetD7.png","./intro_sprite/jetD8.png","./intro_sprite/jetD9.png");
      
        this.jetbombimage =loadImage("./intro_sprite/bomb.jpg");
        World.add(world, this.body);
      }
  
      display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image.scale = 0.1;
        animation(this.image, 0,0);  
        pop();
      }
  }
  