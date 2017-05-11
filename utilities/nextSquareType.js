export default ({ squareType, layerSquareType }) => {
	if (layerSquareType == 'STRIPED') {
		return squareType == 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
	}

	return squareType == 'WHITE' ? 'BLACK' : 'WHITE'
}

