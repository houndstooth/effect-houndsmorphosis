const CANVAS_SIZE = 1000

export default {
	state: {
        gridSize: 45,
        canvasSize: CANVAS_SIZE,
		houndsmorphosisMode: true,
        colorConfig: {
            assignment: {
                mode: 'SUPERTILE',
                supertile: [ 
                    [ [ 0, 0 ], [ 0, 1 ] ], 
                    [ [ 1, 1 ], [ 1, 0 ] ]
                ]
            }
        },
        // offsetOrigin: [ CANVAS_SIZE / 2, CANVAS_SIZE / 2 ]
        // scaleFromGridCenter: false
	}
}