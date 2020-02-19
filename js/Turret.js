class Turret {
    constructor(x, y ) {
        this.body = Bodies.rectangle(x, y, 10, 10 );
        this.width =  175;
        this.height = 125;
       
        this.image = loadImage("./intro_sprite/turret.png");
        World.add(world, this.body);
      }
  
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
      }
  }
  