class Worker {
  // Make a worker
  constructor(x,y, variety) {
    this.pos = createVector(x, y)
    this.armAng = 0
    this.walkAng = 0
    this.wave = []
    this.v = variety
    this.dirChange = 1
    this.armSpeed = .01
  }

  move() {
    // the worker's arm moves back and forth
    // the movement speeds up with time
    this.armSpeed +=.00002
    this.armAng += this.armSpeed * this.dirChange
    if (this.armAng > PI/5) {
      this.dirChange = -1
    }
    if (this.armAng < PI/60) {
        this.dirChange = 1
    }
  }

  show() {
    fill (110,100,90)
    noStroke()
    scale(2)
    // scale(.1)
    push ()
    // for (let i = 0; i < 8; i++) {
      // translate (0,this.wave[i])
      translate (this.pos.x-114,-this.pos.y)
      // the worker
      beginShape()
        vertex(19, 30) //heel
        // back foot
        bezierVertex(18,30.5,   15,30.5,   12.5,30) //toe
        bezierVertex(14,28,     15,30,     16,27) 
        bezierVertex(15,26,     14,23,     13,22) 
        // front foot
        bezierVertex(11,26,     13,27,     12,30) //heel
        bezierVertex(10,30,      9,30.3,    6,30) //toe
        bezierVertex(7,28,     10,29,     10,27) 

        // neck 
        bezierVertex(8,12,     5,8,     9.5,5) 
        bezierVertex(9.5,5,   9,4.3,   9,4.3) 
        // chin
        bezierVertex(9,4.3-this.v,   7.5,5.3, 7.3,4.) 
        bezierVertex(6.8,4.5, 7,4.3,   7,4.3) 
        // mouth
        bezierVertex(7,4.3,   6.3,4.3,  6.6+this.v,4-random()) 
        bezierVertex(7.4,3.5,  7.5,3.8,  7.4-random(),3.5)
        bezierVertex(7,3.2,  5.8-this.v,3.5,  6,3.3+this.v) 
        // nose
        bezierVertex(6.2,2.8,  6.4,2.5,  6.4,2.5)
        bezierVertex(6.4,2.5,  5.4,3,  5.5,2.4+this.v)
        bezierVertex(5.6,2.1,  6.3,1.5,  6.1,1.3)
        // eye
        bezierVertex(6.4,1.4,  6.7,1.4,  7.5,1.5+this.v*.5)
        bezierVertex(7.7,1.3,  6.7,0.7,  6.4,1.4)
        // head & back
        bezierVertex(5.7,1.7,  6.4,0-this.v*2,  8+this.v*3,0)
        bezierVertex(9,0,  10.5,0,   11.5,1) 
        bezierVertex(12.7,2,  17,9,   14-this.v*5,14) 
        vertex(14-this.v*5,14) 
      endShape() 
     circle (6.76,1.26, .4)

    // the arm
      translate (9,7)
      rotate (this.armAng)
      beginShape()
        vertex(0,3)
        bezierVertex(-3,1,     -4,3,    -5,2.7)  
        bezierVertex(-6,2.5,  -9,-.5,   -9,-2-random())  
        bezierVertex(-9,-3,     -8,-4,     -8,-3.5) 
        bezierVertex(-8,-3-random(),     -8,-2.5,   -7.5,-2)
        bezierVertex(-7.1,-2.7, -7.4-random(),-2.9, -7,-2.7) 
        bezierVertex(-6.7,-2.7, -6.7,-1.4, -7,-1)  
        bezierVertex(-6.3,-.5,   -5.5,1,  -4.7,1)
        vertex(0, -1) 
      endShape()
    pop ()
    
    // the old fixed arm
    // vertex(9, 6)
    // bezierVertex(6,9,     5,11,    4,10.7)  
    // bezierVertex(3,10.5,  0,7.5,   0,6)  
    // bezierVertex(0,5,     1,4,     1,4.5) 
    // bezierVertex(1,5,     1,5.5,   1.5,6)
    // bezierVertex(1.9,5.7, 1.6,5.1, 2,5.3) 
    // bezierVertex(2.3,5.7, 2.3,6.6, 2,7)  
    // bezierVertex(2,7.5,   3.5,9,   4.3,9)
    // vertex(10,8) 
    scale(.5)
  }
}