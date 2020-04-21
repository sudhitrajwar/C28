class slingshot {
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 7
            }
            this.pointB = pointB;
            this.sling = Constraint.create(options);
            World.add(world, this.sling);
        }
        attach(body){
            this.sling.bodyA = body;
        }
        
        fly(){
            this.sling.bodyA = null;
        }
    
      
        display(){
            push();
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(3);
                stroke("blue");
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else{
                textSize(18);
                fill(0);
                text("Press space to re-attach the ball", 331,232);
            }
            pop();
        }
        
    }