export default ({squareType, stripedOrSolidLayer}) => {
	if (stripedOrSolidLayer == 'STRIPED') {
		return squareType == 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
	}

	return squareType == 'WHITE' ? 'BLACK' : 'WHITE'
}

