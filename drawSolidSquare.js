import { CENTER } from '../shared/constants'
import { UNIT } from '../shared/customize'

export default (ctx, x, y, size, color, current_coordinate) => {
	ctx.fillStyle = color;

	ctx.beginPath()
	ctx.moveTo(
		CENTER[ 0 ] + UNIT * x * current_coordinate[ 0 ],
		CENTER[ 1 ] + UNIT * y * current_coordinate[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * (x + size) * current_coordinate[ 0 ],
		CENTER[ 1 ] + UNIT * y * current_coordinate[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * (x + size) * current_coordinate[ 0 ],
		CENTER[ 1 ] + UNIT * (y + size) * current_coordinate[ 1 ]
	)
	ctx.lineTo(
		CENTER[ 0 ] + UNIT * x * current_coordinate[ 0 ],
		CENTER[ 1 ] + UNIT * (y + size) * current_coordinate[ 1 ]
	)
	ctx.closePath()
	ctx.fill()
}