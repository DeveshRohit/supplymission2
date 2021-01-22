class Boxwall
{
    constructor(x,y,angle)
    {
        var options=
        {
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.width = 20;
        this.height = 100;
        this.angle=angle;
        this.body=Bodies.rectangle(this.x,this.y,this.angle,options)
        World.add(World,this.body)
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(2);
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }
}