ctx.beginPath()

//top left (move to)
ctx.moveTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT *  y          * current_coordinate[1]
)

//top middle
ctx.lineTo(
  CENTER[0] + UNIT *  (x + size/2) * current_coordinate[0],
  CENTER[1] + UNIT *  y          * current_coordinate[1]
)

//middle left
ctx.lineTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT * (y + size/2)  * current_coordinate[1]
)

//close and fill black
ctx.fillStyle = "black"
ctx.closePath()
ctx.fill()
ctx.beginPath()

//top middle (move to)
ctx.moveTo(
  CENTER[0] + UNIT *  (x + size/2) * current_coordinate[0],
  CENTER[1] + UNIT *  y          * current_coordinate[1]
)

//top right
ctx.lineTo(
  CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
  CENTER[1] + UNIT *  y          * current_coordinate[1]
)

//bottom left
ctx.lineTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//middle left
ctx.lineTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT * (y + size/2)  * current_coordinate[1]
)

//close and fill white
ctx.fillStyle = "white"
ctx.closePath()
ctx.fill()
ctx.beginPath()

//bottom left (move to)
ctx.moveTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//top right
ctx.lineTo(
  CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
  CENTER[1] + UNIT *  y          * current_coordinate[1]
)

//middle right
ctx.lineTo(
  CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
  CENTER[1] + UNIT * (y + size/2)  * current_coordinate[1]
)

//bottom middle
ctx.lineTo(
  CENTER[0] + UNIT * (x + size/2)  * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//bottom left
ctx.lineTo(
  CENTER[0] + UNIT *  x          * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//close and fill black
ctx.fillStyle = "black"
ctx.closePath()
ctx.fill()
ctx.beginPath()

//bottom middle (move to)
ctx.moveTo(
  CENTER[0] + UNIT * (x + size/2)  * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//right middle
ctx.lineTo(
  CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
  CENTER[1] + UNIT * (y + size/2)  * current_coordinate[1]
)

//bottom right
ctx.lineTo(
  CENTER[0] + UNIT * (x + size)  * current_coordinate[0],
  CENTER[1] + UNIT * (y + size)  * current_coordinate[1]
)

//close and fill white
ctx.fillStyle = "white"
ctx.closePath()
ctx.fill()
