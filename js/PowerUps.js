class PowerUps{
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 100, 100);
        this.width = 45;
        this.height = 30;
      this.image = loadImage("sprite/meds.png");
        World.add(world, this.body);
      }
  
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }