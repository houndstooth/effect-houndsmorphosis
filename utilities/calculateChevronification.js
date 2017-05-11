export default ({quarter, iteration, layer}) => {
	if (quarter[ 0 ] == 1) {
		let ratio = iteration / layer
		if (ratio < 1) ratio = 1
		return 2 * ratio
	}

	return 2
}