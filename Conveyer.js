class Conveyer {
  // Makes and rotates a conveyer belt
  constructor(x, y){
    this.pos = createVector(x, y)
    this.ang = 0.1
    this.speed = -.01
  }

  rotate() {
    this.ang += this.speed
    this.speed -= .00001
  }

  show() { 
    // Draw wheels, the first one at x,y
    fill(140,120,110)
    stroke(100,90,80)
    strokeWeight(4)
    let unit = width*.017
    let spokeunit = 2.1*unit
    push()
      translate(this.pos.x, this.pos.y)
    
      //Draw wheels
      let yjiggle = random(-2,2)
        circle(0, 0+ yjiggle, 6.0*unit)
        circle(20.0*unit+ random (), 0+ yjiggle, 6.0*unit)
    
      // Draw background of conveyor
      noStroke()
      beginShape()
        vertex(0, 3.0*unit)
        vertex(20.0*unit, 3.0*unit)
        vertex(20.0*unit, -3.0*unit)
        vertex(0, -3.0*unit)
      endShape(CLOSE)

      //Draw belt
      stroke(100,90,80)
      line(0, -3.0*unit+yjiggle, 20.0*unit, -3.0*unit+yjiggle)
      line(0,  3.0*unit+yjiggle, 20.0*unit,  3.0*unit+yjiggle)
 
      // Draw crooked wheels
      strokeWeight(3) 
      ellipse(0, 0, 4.3*unit, 4.2*unit) 
      ellipse(20.0*unit, 0, 4.3*unit, 4.2*unit)
      ellipse(0, 0, 1.0*unit, 1.0*unit) 
      ellipse(20.0*unit, 0, 1.0*unit, 1.0*unit) 

   pop()    

    //Draw spokes
    for (let i = 0; i <2; i++) {
    push()
      translate(-unit+(i*20.0*unit), 2.5*unit)
      translate(this.pos.x+unit,this.pos.y-17)
      rotate (this.ang)
      this.sx = spokeunit * cos(this.ang)
      this.sy = spokeunit * sin(this.ang)
      line(-this.sx,-this.sy, this.sx, this.sy)
      rotate (PI/2)
      line(-this.sx,-this.sy, this.sx, this.sy)
    pop()
    } 
  }
}