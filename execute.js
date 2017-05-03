var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
UNIT = 1
// ITERATIONS = new Array(100)
// ITERATIONS.fill(0)
ITERATIONS = 100
var iterator = [...Array(ITERATIONS).keys()].map(k => k + 1)
CENTER = [WIDTH / 2, HEIGHT / 2]
COORDINATES = [
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1]
]

var current_coordinate, y, size, color

COORDINATES.forEach(function(coordinate) {
  current_coordinate = coordinate
  quarter()
})

function quarter() {
  y = 0
  size = 1

  iterator.forEach(function(iter) {
    layer(y, size - 1, current_coordinate[0] == 1 ? 'striped' : 'solid', false, iter)
    y += size
    layer(y, size,  current_coordinate[0] == 1 ? 'solid' : 'striped', true, iter)
    y += size
    size += 1
  })
}

function layer(y, initial_size, striped_or_solid_layer, steady, layer_index) {
  var growing_size = initial_size + 1
  var x = 0


  if (current_coordinate[0] * current_coordinate[1] == 1) {
    color = striped_or_solid_layer == 'striped' ? 'striped-c' : 'black'
  } else {
    color = striped_or_solid_layer == 'striped' ? 'striped-d' : 'white'
  }

  iterator.forEach(function(iter) {
    drawSquare(x, y, steady ? initial_size : growing_size, color)

    x += growing_size
    y += initial_size
    growing_size += 1

    if (striped_or_solid_layer == 'striped') {
      color = color == 'striped-d' ? 'striped-c' : 'striped-d'
    } else {
      color = color == 'white' ? 'black' : 'white'
    }

    //this is the bit that forcibly tries to make just stripes in the middle right area
    //but it's too inelegant and ugly to be worth it
    //instead, i just made cusps smaller and roots bigger
    //so you get that kind of native american looking motif
    //that's what the 200.5 stuff is about

    //ah ha! or i could combine the impulses
    //and just have the striped squares have their own parallel transformation
    //from totally normal on the left (where they are tiny)
    //gradually until the cusps are gone on the right
    //so that way they become contiguous stripes

    // console.log(iter, ITERATIONS - layer_index)
    // if (current_coordinate[0] == 1 && iter > layer_index) {
    //   if (striped_or_solid_layer == 'striped') {
    //     color = 'striped-d'
    //   } else {
    //     // color = 'white'
    //   }
    // }
  })
}

function drawSquare(x, y, size, color) {
  var topLeftX, topLeftY
  if (current_coordinate[0] == 1) {
    topLeftX = CENTER[0] + UNIT * x * current_coordinate[0]
  } else {
    topLeftX = CENTER[0] + UNIT * (x + size) * current_coordinate[0]
  }
  if (current_coordinate[1] == 1) {
    topLeftY = CENTER[0] + UNIT * y * current_coordinate[1]
  } else {
    topLeftY = CENTER[0] + UNIT * (y + size) * current_coordinate[1]
  }

  if (color == "striped-c") {
    //this, and analogous one for the other striped, is how i flip the grain of the houndstooth
    //in the lower half
    //although this leads to an unpleasant abberation along the x-axis in the right half...
    //same problem with rotating the grain 90 degrees, perhaps even worse looking...
    //so let's not do this
    // if (current_coordinate[1] == 1) {
      drawStripedSquare(topLeftX, topLeftY, size * UNIT, "white")
    // } else {
    //   drawStripedSquareOtherOrientation(topLeftX, topLeftY, size * UNIT, "white")
    // }
  } else if (color == "striped-d") {
    // if (current_coordinate[1] == 1) {
      drawStripedSquare(topLeftX, topLeftY, size * UNIT, "black")
    // } else {
    //   drawStripedSquareOtherOrientation(topLeftX, topLeftY, size * UNIT, "black")
    // }
  } else {
    drawSolidSquare(x, y, size, color);
  }
}


function drawSolidSquare(x, y, size, color) {
  ctx.fillStyle = color;

  ctx.beginPath()
  ctx.moveTo(
    CENTER[0] + UNIT *  x          * current_coordinate[0],
    CENTER[1] + UNIT *  y          * current_coordinate[1]
  )
  ctx.lineTo(
    CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
    CENTER[1] + UNIT *  y          * current_coordinate[1]
  )
  ctx.lineTo(
    CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
    CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
  )
  ctx.lineTo(
    CENTER[0] + UNIT *  x          * current_coordinate[0],
    CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
  )
  ctx.closePath()
  ctx.fill()
}


function drawStripedSquare(topLeftX, topLeftY, sizedUnit, topLeftColor) {
  ctx.beginPath()

  //top left (move to)
  ctx.moveTo( topLeftX,                 topLeftY                 )
  //top middle
  ctx.lineTo( topLeftX + sizedUnit / 200.5, topLeftY                 )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 200.5 )
  //close and fill topLeftColor
  ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //top middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 200.5, topLeftY                 )
  //top right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY                 )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 200.5 )
  //close and fill other color
  ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom left (move to)
  ctx.moveTo( topLeftX,                 topLeftY + sizedUnit     )
  //top right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY                 )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + (sizedUnit - sizedUnit / 200.5) )
  //bottom middle
  ctx.lineTo( topLeftX + (sizedUnit - sizedUnit / 200.5), topLeftY + sizedUnit     )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //close and fill topLeftColor
  ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom middle (move to)
  ctx.moveTo( topLeftX + (sizedUnit - sizedUnit / 200.5),   topLeftY + sizedUnit     )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + (sizedUnit - sizedUnit / 200.5) )
  //bottom right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //close and fill white
  ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
}
