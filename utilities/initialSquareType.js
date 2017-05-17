export default ({ quarter, layerSquareType }) => {
	if (quarter[ 0 ] * quarter[ 1 ] === 1) {
		return layerSquareType === 'STRIPED' ? 'STRIPED_A' : 'SOLID_B'
	}

	return layerSquareType === 'STRIPED' ? 'STRIPED_B' : 'SOLID_A'
}