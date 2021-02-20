class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,10,options);
    this.radius=10;
        World.add(world, this.body);
      }
      display(){
        
        ellipseMode(CENTER)
        fill(26,5,243);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
if (this.body.position.y>this.radius) {
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
}
      }
}
