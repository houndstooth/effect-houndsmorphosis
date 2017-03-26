var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
UNIT = 1
ITERATIONS = 500

// growingLayer(0, 0, 1, '#000', 0)
// steadyLayer(0, 1, 1, '#0f0', 1)

// growingLayer(0, 2, 2, '#000', 1)
// steadyLayer(0, 4, 2, '#0f0', 2)

// growingLayer(0, 6, 3, '#000', 2)
// steadyLayer(0, 9, 3, '#0f0', 3)

// growingLayer(0, 12, 4, '#000', 3)
// steadyLayer(0, 16, 4, '#0f0', 4)

quadrant();

function quadrant() {
    var x = 0
    var y = 0
    var size = 1
    var y_per = 0

    for (var i = 1; i < ITERATIONS; i++) {
        growingLayer(x, y, size, '#000', y_per)

        y += size
        y_per += 1

        steadyLayer(x, y, size, '#fff', y_per)

        y += size
        size += 1
    }
}

function growingLayer(initial_x, initial_y, initial_size, color, y_per) {
    var size = initial_size
    var x = initial_x
    var y = initial_y

    for (var i = 1; i < ITERATIONS; i++) {
        drawSquare(x, y, size, color)

        x += size
        y += y_per
        size += 1
        color = color == '#000' ? '#fff' : '#000'
    }
}

function steadyLayer(initial_x, initial_y, initial_size, color, y_per) {
    var size = initial_size + 1
    var x = initial_x
    var y = initial_y

    for (var i = 1; i < ITERATIONS; i++) {
        drawSquare(x, y, initial_size, color)

        x += size
        y += y_per
        size += 1
        color = color == '#000' ? '#fff' : '#000'
    }
}

function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath()
    ctx.moveTo(UNIT * x, UNIT * y)
    ctx.lineTo(UNIT * (x + size), UNIT * y)
    ctx.lineTo(UNIT * (x + size), UNIT * (y + size))
    ctx.lineTo(UNIT * x, UNIT * (y + size))
    ctx.closePath()
    ctx.fill()
}
