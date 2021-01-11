class Box{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true
        }

        this.body=Bodies.rectangle(x,y,800,10,options)
        this.width=800
        this.height=10
        
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
        pop();


    }
}