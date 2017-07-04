export default ({ address }) => {
	let xOffset = 0
	let yOffset = 0

	if (address[ 0 ] < 0) {
		yOffset += 1
		xOffset += 1
	}

	if (address[ 1 ] < 0) {
		xOffset += 1
	}

	return [ xOffset, yOffset ]
}
