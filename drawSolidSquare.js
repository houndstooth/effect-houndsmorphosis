import { CENTER } from '../shared/constants'
import { UNIT } from '../shared/customize'

export default (ctx, x, y, size, color, quarter) => {
	ctx.fillStyle = color;

	ctx.beginPath()
	ctx.moveTo(
		CENTER[ 0 ] + UNIT * x * quarter[ 0 ],
		CENTER[ 1 ] + UNIT * y * quarter[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * (x + size) * quarter[ 0 ],
		CENTER[ 1 ] + UNIT * y * quarter[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * (x + size) * quarter[ 0 ],
		CENTER[ 1 ] + UNIT * (y + size) * quarter[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * x * quarter[ 0 ],
		CENTER[ 1 ] + UNIT * (y + size) * quarter[ 1 ]
	)
	ctx.closePath()
	ctx.fill()
}