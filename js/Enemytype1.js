class Enemytype1 {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, 500, 500, options);
        this.width = this.width;
        this.height = this.height;
        this.image = loadAnimation("sprite/a1t.png","sprite/a2.png","sprite/a3.png","sprite/a4t.png");
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
  