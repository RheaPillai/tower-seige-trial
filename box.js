class Box {

    constructor(x,y,width,height){
    
        var options ={
            isStatic: false,
            restitution : 0.8,
            density : 0.001, 
            friction : 0.1
            
        }
    
    
        this.width = width
        this.height = height
    
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body)
        
    }
    
    display(){ 
        var pos = this.body.position
        push()
       translate(pos.x,pos.y)
       rotate(this.body.angle)
     
        rectMode(CENTER)
        rect(0,0,this.width, this.height)
        pop()
    
    }
    // display(){
  
    //     if(this.body.speed<3){
    //     console.log(this.body.speed)
    //     this.body.display()
    //   }
      
    //   else{
    //     push()
        
    //     World.remove(world,this.body)
      
    //     this.vis=this.vis-6
    //     tint(255,this.vis)
        
    //     rect(this.body.position.x,this.body.position.y,50,50)
    //     pop()
    //   }
      
      
     // }
    
    }