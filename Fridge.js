class Fridge {
  constructor(x, y) {
     // Each fridge will start at this.pos.x, this.pos.y, and move to the left, horizontally
    // The current position of the frige will be this.fx, this.pos.y)
    this.pos = createVector(x,y)
    this.fx = this.pos.x
    // The initial fridge size is set here. 
    // Each time a new fridge appears, its size will be larger by this.sizeInc
    this.fridgeWidth = 12
    this.sizeInc = 3
    // The fridge will increase speed each time the arrow comes around, by increasing this.posInc
    this.posInc = 0.1
  }
  update() {
    // Update the x position
    this.fx -= this.posInc
    // When the fridge reaches x=0, it goes back to the beginning of the conveyer belt (width*.2) 
    if (this.fx <= 0) {
      this.fx = width*.2
      this.posInc += .08
      this.sizeInc += 3
      this.fridgeWidth += this.posInc
    }
    // Increase the size and speed each time a new fridge appears
   
      // this.fridgeHeight = this.fridgeWidth * 2 
  }

  show() {
    push ()
    this.fridgeHeight = this.fridgeWidth * 2 
      scale (2)
      image(fridgeimage,
       this.fx,height*.26,
       this.fridgeWidth,this.fridgeHeight)
      scale(.5)
    pop ()
  }
  }