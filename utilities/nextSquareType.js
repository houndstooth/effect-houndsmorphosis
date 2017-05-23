export default ({ squareType, layerSquareType }) => {
	if (layerSquareType === 'STRIPED') {
		return squareType === 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
	}

	return squareType === 'SOLID_A' ? 'SOLID_B' : 'SOLID_A'
}
