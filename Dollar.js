class Dollar {
constructor(x, y) {
  this.pos = createVector(x,y)
  this.size1 = 20
  this.posInc = 5
}
update() {
if (switchdollar) {
  this.size1 *= 1.5
  this.posInc += 35
  switchdollar = false
}
}
show() {
  // console.log ("Switchdollar", switchdollar)
  image(dollarimage,
    width/2+this.posInc,height/2,
    this.size1,this.size1*.5)
}
}