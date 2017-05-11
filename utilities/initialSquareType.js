export default ({ quarter, layerSquareType }) => {
	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		return layerSquareType == 'STRIPED' ? 'STRIPED_A' : 'BLACK'
	}

	return layerSquareType == 'STRIPED' ? 'STRIPED_B' : 'WHITE'
}