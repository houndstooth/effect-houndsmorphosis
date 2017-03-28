var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
UNIT = 5
ITERATIONS = new Array(100)
ITERATIONS.fill(0)

ctx.strokeStyle = '#0f0'
ctx.strokeWidth = 1

var y = 0
var size = 1

ITERATIONS.forEach(function() {
    layer(y, size - 1, '#fff', false)
    y += size
    layer(y, size, '#000', true)
    y += size
    size += 1
})

function layer(y, initial_size, color, steady) {
    var growing_size = initial_size + 1
    var x = 0

    ITERATIONS.forEach(function() {
        drawSquare(x, y, steady ? initial_size : growing_size, color)

        x += growing_size
        y += initial_size
        growing_size += 1
        color = color == '#000' ? '#fff' : '#000'
    })
}

function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath()
    ctx.moveTo(UNIT *  x         , UNIT *  y         )
    ctx.lineTo(UNIT * (x + size) , UNIT *  y         )
    ctx.lineTo(UNIT * (x + size) , UNIT * (y + size) )
    ctx.lineTo(UNIT *  x         , UNIT * (y + size) )
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}
