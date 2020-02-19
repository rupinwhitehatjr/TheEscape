class Enemytype5 {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 150;
        this.height = 150;
        this.image = loadAnimation("sprite/heli.png");
        World.add(world, this.body);
      }
  
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        animation(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }