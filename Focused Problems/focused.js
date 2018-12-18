// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.
// At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.
// What is the maximum total sum that the height of the buildings can be increased?
// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation:
// The grid is:
// [ [3, 0, 8, 4],
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]
//
// The skyline viewed from top or bottom is: [9, 4, 8, 7] => iSkyline
// The skyline viewed from left or right is: [8, 7, 9, 3] => jSkyline
//
// The grid after increasing the height of buildings without affecting skylines is:
// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]
//
// [ [3, 0, 8, 4],
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]
// Skyline viewed top & bottom is max per column
// Skyline viewed left & right is max per row
// Increase in the element we look @ the max for the row & column and it takes on the smaller number
// Find max for row & column
//  0: 8; 1: 7; 2: 9; 3: 3 (i maxes) (left & right)
// (j maxes) (top & bottom) 0: 9; 1: 4; 2: 8; 3: 7
// Saving into hash so we can index into it to compare (later on)
// Find the maxes (iterating the grid saving into the hash)
// Traverse through again we check the max of row & column and change the element to the smaller one
// We have a counter in the beginning. Diff = changed el - el; counter += diff; return counter once we’re done traversing
Function skyLines(grid) {
	Let counter = 0;
	Let rowHash = {}
	Let colHash = {}

	//this is what we’re returning at the end
	//find max per column & row
	For (let i = 0; i < grid.length; i++) {
		Let colMax = 0
		Let rowMax = 0
For (let j = 0; j < grid[i].length; j++) {
If (colMax < grid[j][i]) {
	colMax = grid[j][i]
}
If (rowMax < grid[i][j]) {
	rowMax = grid[i][j]
}
}
rowHash[i] = rowMax
rowHash[j] = colMax
}

For (let i = 0; i < grid.length; i++) {
	For (let j = 0; j < grid[i].length; j++) {
	Let el = grid[i][j]
		If (rowHash[i] > rowHash[j]) {
			Let diff = rowHash[j] - el
	El = rowHash[j]
	Counter += diff
} else {
			Let diff = rowHash[i] - el
	El = rowHash[i]
	Counter += diff
}
}
}
Return counter
}
