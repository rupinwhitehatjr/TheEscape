class Enemytype3 {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 50;
        this.height = 50;
        this.image = loadAnimation("sprite/2a.png","sprite/2b.png","sprite/2c.png","sprite/2d.png","sprite/2e.png","sprite/2f.png","sprite/2g.png","sprite/2h.png");
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