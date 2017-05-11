export default ({ctx, origin, sizedUnit, topLeftColor, hbf}) => {
	ctx.beginPath()

	//top left (move to)
	ctx.moveTo(origin[ 0 ], origin[ 1 ])
	//top middle
	ctx.lineTo(origin[ 0 ] + sizedUnit / hbf, origin[ 1 ])
	//middle left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / hbf)
	//close and fill topLeftColor
	ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//top middle (move to)
	ctx.moveTo(origin[ 0 ] + sizedUnit / hbf, origin[ 1 ])
	//top right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
	//bottom left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//middle left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / hbf)
	//close and fill other color
	ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom left (move to)
	ctx.moveTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//top right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
	//middle right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + (sizedUnit - sizedUnit / hbf))
	//bottom middle
	ctx.lineTo(origin[ 0 ] + (sizedUnit - sizedUnit / hbf), origin[ 1 ] + sizedUnit)
	//bottom left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//close and fill topLeftColor
	ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom middle (move to)
	ctx.moveTo(origin[ 0 ] + (sizedUnit - sizedUnit / hbf), origin[ 1 ] + sizedUnit)
	//middle right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + (sizedUnit - sizedUnit / hbf))
	//bottom right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit)
	//close and fill white
	ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
	ctx.closePath()
	ctx.fill()
}