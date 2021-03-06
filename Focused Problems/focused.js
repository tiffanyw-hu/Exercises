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

const kthSmallest = function(root, k) {
    let left = nodeCount(root.left);
    if (left + 1 === k) {
        return root.val;
    } else if (left + 1 < k) {
        return kthSmallest(root.right, k - left - 1);
    } else {
        return kthSmallest(root.left, k);
    }
};

const nodeCount = (root) => {
    if (root === null) {
        return 0;
    }
    return 1 + nodeCount(root.left) + nodeCount(root.right);
}



// find key
// if key is > root then check root.right if still larger keep going right
// if key is < root then check left keep going left

// how do i call the node thats the parent without using node.parent
// check down three layers
// check root if larger or less than then go appropriate branch
// then check currentNOde if target return root,
// check less then or greater than go down appropriate side
// if target check if less than or greater than parentNode || root
// if node === null then return -1;
// if node === key then return node.right
// if

//            28
//         /      \
//      15          40
//     /    \      /   \
//   10      20   33 .  45
//  /  \     / \   / \    / \
// 8   12  16   25 29 37 43 . 49

function firstOrderSuc(node, key){
  if (node === key && node.right === null){
    return -1;
  }
  if (node === key){
    return node.right
  }
  //check for left side
  let currentNode = node
  let parentNode;
  if (key < currentNode){
    currentNode = currentNode.left
    // left side recursive check to grandparents
    if (currentNode === key){
      return node;
    } else {
      if (key < currentNode){
        parentNode = currentNode
        currentNode = parentNode.left
        if currentNode === key {
          return parentNode
        } else {
          firstOrderSuc(currentNode, key)
        }
      } else{
        parentNode = currentNode
        currentNode = parentNode.right
        if currentNode === key {
          return node
        } else {
          firstOrderSuc(currentNode, key)
        }
      }
    }
  } else {
    // right side recursive check
    firstOrderSuc(node.right, key)
  }
}

//haschildren helper function -> returns children [child1, child2]
//root doesn't have children (array is empty) then just return true

//check is a helper function cos im lazy(children)
//if yes then we need to do a check
//compare child on left is less than && right is greater than or equal to
//return false if fail this test
//hasChildren => children?
//we need to keep doing that until we don't have any children?
//base case => return true if we don't have any children

//main function -> checks for children -> checks if the children passes the test -> return true

//recursion?
//i don't like recursion

function isBST(root) {
  let children = hasChildren(root)

  let keys = Object.keys(children)
  let values = Object.values(children)

  if (Object.keys(children).length === 0) {
    return root
  }

  if (check(children, root) === false) {
    return false
  } else {
    for (let i = 0; i < keys.length; i++) {
      isBST(values[i])

    }
  }
}

function hasChildren(root) {
  let spawns = {}
  if (root.left) {
    spawns[left] = root.left
  } else if (root.right) {
    spawns[right] = root.right
  }
  return spawnArray
}

function check(children, root) {
  //children is an object
  //left, right, or both
  //maybe check if it exists? later
  if (children[left] && children[right]) {
    if (children[left] < root && children[right] >= root) {
      //children of left & right
      return true
    }
  } else if (children[right] === undefined && children[left]) {
    	if (children[left] >= root) {
      	return false
    	}
  	else if (children[left] === undefined && children[right]) {
      if (children[right] < root) {
        return false
      }
    }
  }
	return true
}

//lets me know if the children pass the BST rule
