export default ({quarter, stripedOrSolidLayer}) => {
	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		return stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_A' : 'BLACK'
	}

	return stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_B' : 'WHITE'
}