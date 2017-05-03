var canvas = document.querySelector('.canvas')
canvas.width = canvas.height = 1000

var ctx = canvas.getContext('2d')
ctx.strokeStyle = '#0f0'

UNIT = 1
ITERATIONS = 100
var iterator = [...Array(ITERATIONS).keys()].map(k => k + 1)

var y = 0
iterator.forEach(base_size => {
    [true, false].forEach(growing => {
        layer(y, base_size, growing)
        y += base_size
    })
})

function layer(y, base_size, growing) {
    if (growing) base_size -= 1
    var x = 0
    var color = growing ? '#fff' : '#000'
    iterator.forEach(growing_size => {
        var size = base_size + (growing ? growing_size : 0)
        drawSquare(x, y, size, color)
        x += base_size + growing_size
        y += base_size
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