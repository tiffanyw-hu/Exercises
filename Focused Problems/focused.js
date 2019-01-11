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

class MinHeap {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    // Array representation of the heap.
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
    this.length = 0;
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * @param {number} childIndex
   * @return {*}
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  /**
   * @return {*}
   */
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      this.length -= 1;
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // Move the last element from the end to the head.
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    this.length -= 1;
    return item;
  }

  /**
   * @param {*} item
   * @return {MinHeap}
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    this.length += 1;
    return this;
  }

  /**
   * @param {*} item
   * @param {Comparator} [customFindingComparator]
   * @return {MinHeap}
   */
  remove(item, customFindingComparator) {
    // Find number of items to remove.
    const customComparator = customFindingComparator || this.compare;
    const numberOfItemsToRemove = this.find(item, customComparator).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being change after each heapify process.
      const indexToRemove = this.find(item, customComparator).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // Get parent.
        const parentItem = this.hasParent(indexToRemove) ? this.parent(indexToRemove) : null;
        const leftChild = this.hasLeftChild(indexToRemove) ? this.leftChild(indexToRemove) : null;

        // If there is no parent or parent is less then node to delete then heapify down.
        // Otherwise heapify up.
        if (
          leftChild !== null
          && (
            parentItem === null
            || this.compare.lessThan(parentItem, this.heapContainer[indexToRemove])
          )
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    this.length -= 1;
    return this;
  }

  /**
   * @param {*} item
   * @param {Comparator} [customComparator]
   * @return {Number[]}
   */
  find(item, customComparator) {
    const foundItemIndices = [];
    const comparator = customComparator || this.compare;

    for (let itemIndex = 0; itemIndex < this.length; itemIndex += 1) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        foundItemIndices.push(itemIndex);
      }
    }

    return foundItemIndices;
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex) {
    // Take last element (last in array or the bottom left in a tree) in
    // a heap container and lift him up until we find the parent element
    // that is less then the current new one.
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex)
      && this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex))
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyDown(customStartIndex) {
    // Compare the root element to its children and swap root with the smallest
    // of children. Do the same for next children after swap.
    let currentIndex = customStartIndex || 0;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
        && this.compare.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.compare.lessThan(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.heapContainer.length;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.heapContainer.toString();
  }
}

// helper class for keeping track of a character's count and index
class Pair {
    constructor(count, index) {
        this.count = count;
        this.index = index;
    }

    getCount() {
        return this.count;
    }

    getIndex() {
        return this.index;
    }

    setCount(count) {
        this.count = count;
    }

    setIndex(index) {
        this.index = index;
    }
}

// Function to find the first k non-repeating character in
// the string by doing only one traversal of it
const firstKNonRepeating = (str, k) => {
    // map to store character count and the index of its
    // last occurrence in the string
    let map = {};

    for (let i = 0 ; i < str.length; i++)
    {
        if (map[str.charAt(i)] === undefined) {
            map[str.charAt(i)] = new Pair(1, i);
        }
        else {
            let pair = map[str.charAt(i)];
            pair.setCount(pair.getCount() + 1);
            pair.setIndex(i);
        }
    }

    // create an empty max-heap (max size k)
    let comparator = new Comparator;
    let pq = new MinHeap(comparator.reverse());

    // traverse the map and process index of all characters
    // having count of 1
    for (let key in map) {
        let count = map[key].getCount();
        let index = map[key].getIndex();

        if (count == 1) {
            // if heap has less than k keys in it
            // push index of current character
            if (--k >= 0) {
                pq.add(index);
            }
            // else if index of current element is less than the root
            // of the heap, replace the root with the current element
            else if (index < pq.peek()) {
                pq.poll();
                pq.add(index);
            }
        }
    }

    // Now the heap contains index of count k non-repeating characters

    // pop all keys from the max-heap
    while (pq.length > 0) {
        // extract the maximum node from the max-heap
        let max_index = pq.poll();
        console.log(str.charAt(max_index) + " ");
    }
}
