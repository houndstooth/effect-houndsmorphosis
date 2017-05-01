var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
UNIT = 1
ITERATIONS = new Array(100)
ITERATIONS.fill(0)
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

  ITERATIONS.forEach(function() {
    layer(y, size - 1, current_coordinate[0] /* * current_coordinate[1] */ == 1 ? 'white' : 'black', false)
    y += size
    layer(y, size,  current_coordinate[0] /* * current_coordinate[1] */ == 1 ? 'black' : 'white', true)
    y += size
    size += 1
  })
}

function layer(y, initial_size, solid_color_in_layer, steady) {
  var growing_size = initial_size + 1
  var x = 0
  if (current_coordinate[0]  * current_coordinate[1] == 1) {
    color = solid_color_in_layer
  } else {
    color = solid_color_in_layer == 'white' ? 'striped-a' : 'striped-b'
  }

  ITERATIONS.forEach(function() {
    drawSquare(x, y, steady ? initial_size : growing_size, color)

    x += growing_size
    y += initial_size
    growing_size += 1

    if (solid_color_in_layer == 'white') {
      color = color == 'striped-a' ? 'white' : 'striped-a'
    } else {
      color = color == 'striped-b' ? 'black' : 'striped-b'
    }
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

  if (color == "white") {
    drawStripedSquare(topLeftX, topLeftY, size * UNIT, "white")
  } else if (color == "striped-a") {
    drawStripedSquare(topLeftX, topLeftY, size * UNIT, "black")
  } else {
    drawSolidSquare(x, y, size, color);
  }
}


function drawSolidSquare(x, y, size, color) {
  if (color == "striped-b") {
    ctx.fillStyle = "white"
  } else {
    ctx.fillStyle = color;
  }

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

function drawStripedSquareOtherOrientation(topLeftX, topLeftY, sizedUnit, topRightColor) {
  ctx.beginPath()

  //top right (move to)
  ctx.moveTo( topLeftX + sizedUnit,     topLeftY                 )
  //top middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //close and fill topRightColor
  ctx.fillStyle = topRightColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //top middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //top left
  ctx.lineTo( topLeftX,                 topLeftY                 )
  //bottom right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //close and fill other color
  ctx.fillStyle = topRightColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom right (move to)
  ctx.moveTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //top left
  ctx.lineTo( topLeftX,                 topLeftY                 )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
  //bottom middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY + sizedUnit     )
  //close and fill topRightColor
  ctx.fillStyle = topRightColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 2, topLeftY + sizedUnit     )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //close and fill other color
  ctx.fillStyle = topRightColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()
}


function drawStripedSquare(topLeftX, topLeftY, sizedUnit, topLeftColor) {
  ctx.beginPath()

  //top left (move to)
  ctx.moveTo( topLeftX,                 topLeftY                 )
  //top middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
  //close and fill topLeftColor
  ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //top middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //top right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY                 )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
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
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //bottom middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY + sizedUnit     )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //close and fill topLeftColor
  ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom middle (move to)
  ctx.moveTo( topLeftX + sizedUnit/2,   topLeftY + sizedUnit     )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //bottom right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //close and fill white
  ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
}
