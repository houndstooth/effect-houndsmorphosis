import ctx from '../../shared/render/ctx'
import { UNIT } from '../../shared/common/customize'

export default ({ origin, size, originColor, otherColor }) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()

	//top left (move to)
	ctx.moveTo(origin[ 0 ], origin[ 1 ])
	//top middle
	ctx.lineTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
	//middle left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
	//close and fill origin color
	ctx.fillStyle = originColor
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//top middle (move to)
	ctx.moveTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
	//top right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
	//bottom left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//middle left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
	//close and fill other color
	ctx.fillStyle = otherColor
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom left (move to)
	ctx.moveTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//top right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
	//middle right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + (sizedUnit / 2))
	//bottom middle
	ctx.lineTo(origin[ 0 ] + (sizedUnit / 2), origin[ 1 ] + sizedUnit)
	//bottom left
	ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	//close and fill origin color
	ctx.fillStyle = originColor
	ctx.closePath()
	ctx.fill()
	ctx.beginPath()

	//bottom middle (move to)
	ctx.moveTo(origin[ 0 ] + (sizedUnit / 2), origin[ 1 ] + sizedUnit)
	//middle right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + (sizedUnit / 2))
	//bottom right
	ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit)
	//close and fill other color
	ctx.fillStyle = otherColor
	ctx.closePath()
	ctx.fill()
}