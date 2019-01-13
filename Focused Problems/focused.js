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

//determine whether or not a graph is strongly connected
//any point you start at you can eventually hit every node
//graph -> vertices & edges
//search to see if we hit every vertex & reverse
//strongly connected?

class Vertex {
	constructor(value) {
    this.value = value
    this.inEdges = []
    this.outEdges = []
  }
}

class Edge {
  constructor(toVertex, fromVertex) {
	  this.toVertex = toVertex
  	this.fromVertex = fromVertex
    toVertex.inEdges.push(this)
    fromVertex.outEdges.push(this)
  }
}

class Graph {
  constructor(vetices, edges) {
    this.vertices = []
    this.edges = []
    let visited = []
  }

  //search
  	//go through each vertex & if you don't go through all of them then it's not strongly connected
  	//compare the lengths of visited nodes & the length of graph?
  	//push visited nodes into visited & once the search is done you compare vertices.length
  function dfs(root, visited) {
    //go all the way to the end
    visited.push(root)

    root.outEdges.forEach(edge => {
      let nextNode = edge.toVertex
      if (visited.includes(nextNode)) {
        break
      } else {
       dfs(nextNode, visited)
      }
    })
  }

  function connection(visited) {
    if (visited.length === this.vertices.length) {
      return true
    }
    return false
  }

	function reverse(root, visited) {
    visited.push(root)

    root.inEdges.forEach(edge => {
      let nextNode = edge.fromVertex
      if (visited.includes(nextNode)) {
        break
      } else {
       dfs(nextNode, visited)
      }
    })
  }

  function runThis(visited, root) {
    dfs(root, visited)
    if (!connection(visited)) {
      return false
    }
    visited = []
    reverse(root, visited)
		if (!connection(visited)) {
      return false
    }
    return true
  }


}


//merge sort

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}

	let mid = arr.length / 2
	let left = arr.slice(0...mid)
	let right = arr.slice(mid...arr.length)
	let sortLeft = mergeSort(left)
	let sortRight = mergeSort(right)

	merge(sortLeft, sortRight)
}

function merge(left, right) {
	let mergedArr = [];

	while ((left.length > 1) || (right.length > 1)) {
		mergedArr.push(
			((left[0] > right[0]) ? (right.shift) : (left.shift))
		)
	}
	let resultArr = mergedArr.concat(left).concat(right)
	return resultArr
}

const isMinHeap = (heapArr, idx = 0) => {
  // if idx is a leaf node return true as every leaf node is a heap
  if (2 * idx + 2 > heapArr.length) return true;

  // otherwise we know idx is an internal node
  // recursively check if left child is a heap
  let left = heapArr[idx] <= heapArr[2 * idx + 1] && isMinHeap(heapArr, 2 * idx + 1);

  // recursively check if right child is a heap (to avoid array out of bounds we first check if a right child exists or not)
  let right = (2 * idx + 2 === heapArr.length) ||
    heapArr[idx] <= heapArr[2 * idx + 2] && isMinHeap(heapArr, 2 * idx + 2);

  // return true if both left and right children are heaps
  return left && right;
}

let heapA = [2,3,2,11,4,7,4]
let heapB = [2,3,1,11,4,7,4]

isMinHeap(heapA) // true
isMinHeap(heapB) // fals

// data structure for Min Heap
class ConvertHeap {
    // return left child of arr[i]
    left (i) {
        return (2 * i + 1);
    }

    // return right child of arr[i]
    right(i) {
        return (2 * i + 2);
    }

    // Utility function to swap two indices in the array
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // recursive heapifyDown algorithm. The node at index i and
    // its two direct children violate the heap property
    heapifyDown(arr, i, size) {
        // get left and right child of node at index i
        let left = this.left(i);
        let right = this.right(i);

        let smallest = i;

        // compare arr[i] with its left and right child
        // and find smallest value
        if (left < size && arr[left] < arr[i]) {
            smallest = left;
        }

        if (right < size && arr[right] < arr[smallest]) {
            smallest = right;
        }

        // swap with child having lesser value and
        // call heapify-down on the child
        if (smallest !== i) {
            this.swap(arr, i, smallest);
            this.heapifyDown(arr, smallest, size);
        }
    }

    // build heap
    convert(arr) {
        // call heapifyDown starting from last internal node all the
        // way upto the root node
        let i = Math.floor((arr.length - 2) / 2);
        while (i >= 0) {
            this.heapifyDown(arr, i--, arr.length);
        }
        return arr;
    }

}
/*
            9

      4         7

    1   -2   6      5

*/
// array representing max heap
let arr = [ 9, 4, 7, 1, -2, 6, 5 ];

// build a min heap by initializing it by given array
