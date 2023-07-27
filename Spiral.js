class Spiral {
  constructor(x,y) {
    this.pos = createVector(x,y)
    this.history = []
    this.dollarAng = 0
    this.fridgeAng = 0
    this.factor = 1
    this.spiralSpeed = 0.01
    this.fridgeSpeed = 0.01
  }

  update() {
    this.dollarAng += this.spiralSpeed
    this.fridgeAng += this.fridgeSpeed
    if (this.dollarAng >= TWO_PI) {
        this.dollarAng = 0.0
        switchdollar = true
    }
    if (this.dollarAng >= PI + PI/2) {
      switchcap = true
  }
  if (this.fridgeAng >= TWO_PI + PI/2) {
    // this.fridgeAng = 0
    production = true
  }
    this.spiralSpeed += .000001
    this.factor += this.spiralSpeed * 6
    this.pos.x = width/2 + cos(this.dollarAng) * this.factor
    this.pos.y = height/2 + sin(this.dollarAng) * this.factor
    let oldpos = createVector(this.pos.x,this.pos.y)
    this.history.push(oldpos)
    if (this.history.length > 600) {
      this.history.splice(0, 1);
    }
  }

  show() {
    fill ("white")
    stroke("white")
    strokeWeight(2)
    // circle(this.pos.x, this.pos.y, 5)
    // arrowhead
    let pt1x = width/2 + cos(this.dollarAng+.4) * this.factor
    let pt1y = width/2 + sin(this.dollarAng+.4) * this.factor
    let pt2x = width/2 + cos(this.dollarAng) * (this.factor*1.1)
    let pt2y = width/2 + sin(this.dollarAng) * (this.factor*1.1)
    let pt3x = width/2 + cos(this.dollarAng) * (this.factor*0.9)
    let pt3y = width/2 + sin(this.dollarAng) * (this.factor*0.9)
    triangle (pt1x, pt1y, pt2x, pt2y, pt3x, pt3y )

    // spiralling circle
    for (let i = 0; i <this.history.length; i++) {
      let oldpos = this.history[i]
      circle (oldpos.x, oldpos.y, 5)
    }

  }
}