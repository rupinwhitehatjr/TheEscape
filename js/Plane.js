class Plane {
    constructor(x, y ,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10 ,options);
        this.width = 100;
        this.height = 100;
        this.image = loadAnimation("sprite/planed1.png","sprite/planed2.png","sprite/planed3.png","sprite/planed4.png","sprite/planed5.png","sprite/planed6.png","sprite/planed7.png","sprite/planed8.png","sprite/planed9.png","sprite/planed10.png");
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
  