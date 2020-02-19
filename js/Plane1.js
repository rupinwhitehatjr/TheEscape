class Plane1 {
    constructor(x, y ,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10 ,options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("sprite/plane25.png");
        World.add(world, this.body);
      }
  
      display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image.scale = 0.1;
        image(this.image, 0,0);  
        pop();
      }
  }
  