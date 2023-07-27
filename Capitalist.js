class Capitalist {
  constructor(x, y) {
    this.pos = createVector(x,y)
    this.size1 = 15
    this.posInc = 0.1
  }
  update() {
  if (switchcap) {
    this.size1 *= 1.002
    this.posInc += .005
    // console.log("posInc", this.posInc)
    switchcap = false
  }
  }
  show() {
    image(capitalistimage,
      width/2,height/(1.7+this.posInc),
      this.size1*1.7,this.size1*2.5)
  }
  }