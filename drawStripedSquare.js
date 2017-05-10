export default ({ctx, topLeftX, topLeftY, sizedUnit, topLeftColor, hbf}) => {
	ctx.beginPath()

	//top left (move to)
	ctx.moveTo(topLeftX, topLeftY)
	//top middle
	ctx.lineTo(topLeftX + sizedUnit / hbf, topLeftY)
	//middle left
	ctx.lineTo(topLeftX, topLeftY + sizedUnit / hbf)
	//close and fill topLeftColor
	ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//top middle (move to)
	ctx.moveTo(topLeftX + sizedUnit / hbf, topLeftY)
	//top right
	ctx.lineTo(topLeftX + sizedUnit, topLeftY)
	//bottom left
	ctx.lineTo(topLeftX, topLeftY + sizedUnit)
	//middle left
	ctx.lineTo(topLeftX, topLeftY + sizedUnit / hbf)
	//close and fill other color
	ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom left (move to)
	ctx.moveTo(topLeftX, topLeftY + sizedUnit)
	//top right
	ctx.lineTo(topLeftX + sizedUnit, topLeftY)
	//middle right
	ctx.lineTo(topLeftX + sizedUnit, topLeftY + (sizedUnit - sizedUnit / hbf))
	//bottom middle
	ctx.lineTo(topLeftX + (sizedUnit - sizedUnit / hbf), topLeftY + sizedUnit)
	//bottom left
	ctx.lineTo(topLeftX, topLeftY + sizedUnit)
	//close and fill topLeftColor
	ctx.fillStyle = topLeftColor == "white" ? "white" : "black"
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom middle (move to)
	ctx.moveTo(topLeftX + (sizedUnit - sizedUnit / hbf), topLeftY + sizedUnit)
	//middle right
	ctx.lineTo(topLeftX + sizedUnit, topLeftY + (sizedUnit - sizedUnit / hbf))
	//bottom right
	ctx.lineTo(topLeftX + sizedUnit, topLeftY + sizedUnit)
	//close and fill white
	ctx.fillStyle = topLeftColor == "white" ? "black" : "white"
	ctx.closePath()
	ctx.fill()
}