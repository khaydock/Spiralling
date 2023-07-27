let switchcap = false
let switchdollar = false
let production = false

function preload(){
  capitalistimage = loadImage("Capitalist.png")
  dollarimage = loadImage("Dollar.png")
  fridgeimage = loadImage("Fridge.png")
}

function setup() {
  imageMode(CENTER)
  createCanvas(400,400)
  stroke ("white")

  // Define a spiral
  spiral = new Spiral()

  // Define a capitalist
  capitalist = new Capitalist()

  // Define a dollar
  dollar = new Dollar()

  // Define workers 
  let variety = random(-.3,.3)
  worker1 = new Worker((width)*.5,-(height*5)/20, variety)
  worker2 = new Worker((width)*.43,-(height*5)/20, variety)
  worker3 = new Worker((width)*.36,-(height*5)/20, variety)
  worker4 = new Worker((width)*.29,-(height*5)/20, variety)

  // Define fridges
  fridge1 = new Fridge(width*.2, height*.7)
  fridge2 = new Fridge(width*.15, height*.7)
 
  // Define a conveyer belt
  conveyer = new Conveyer(width*.06, height*.77)

}

function draw() {
  background (130,160,300)

  spiral.update()
  spiral.show()

  capitalist.update()
  capitalist.show()

  // dollar.update()
  // dollar.show()

  if (production) {

    worker1.move()
    worker1.show()

    worker2.move()
    worker2.show()

    worker3.move()
    worker3.show()

    worker4.move()
    worker4.show()

    fill(220,170,120)
    rect (0,height*.55,width*.46, height*.3)
    conveyer.rotate()
    conveyer.show()

    fridge1.update()
    fridge1.show()

    fridge2.update()
    fridge2.show()

  }
  dollar.update()
  dollar.show()
}

  function keyPressed() {
    // if (key == "s") {
      // saveGif('capitalspiral.gif', 50)
      // Note: be sure to use current version of p5.js
      // to convert gif to mp4 use https://ezgif.com/gif-to-mp4/ezgif-1-ce23aea223.gif
    // }
  }