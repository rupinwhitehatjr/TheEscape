class Launch {
    constructor(x, y ) {
        this.body = Bodies.rectangle(x, y, 10, 10);
        this.width = 80;
        this.height = 80;
        this.image = loadAnimation("sprite/launch1.png","sprite/launch2.png","sprite/launch3.png","sprite/launch4.png","sprite/b8.png","sprite/b9.png","sprite/b10.png","sprite/b11.png")
      
        
        World.add(world, this.body);
      }
  
      display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image.scale = 0.1;
        animation(this.image, 0,0,this.width,this.height);  
        pop();
      }
  }
  