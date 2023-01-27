# heaps
Code along with Colt Steele's JS algorithms and data structures masterclass

What are heaps?
    - a type of tree
    - Great for schedule/ priority task list
    - types: binary, fibonacci, pairing, leftist, etc. 

Binary Heaps
    - this course mainly focuses on this type of heap
	- two types: min and max heaps
		- MaxBinaryHeap
			- parent nodes are always larger than child nodes
			- what makes it different from a Binary Search Tree is that the children are smaller and the order of the children doesn't matter
			- root is always the largest
		- MinBinaryHeap
			- parent nodes are always smaller than child nodes
			- root is always the smallest
	- similar to a binary search tree, but with different rules
	- at most each parent can have two children 
	- compact as possible 
		- every left and right are filled out before moving up
	- used to implement priority queues and with graph traversal algorithms
	- can use an array to store a binary heap
	- for any index of an array (n) the left child is stored at 2n + 1 and the right child is at 2n + 2
	- for any child node at index n, its parent is at index Math.Floor((n -1) / 2)
	-Defining our class
		- Class Name: MaxBinaryHeap
		- Properties: values = []
	- Adding to MaxBinaryHeap: add to the end and bubble up
	- Removing from MaxBinaryHeap (extract max value)
		- remove the root
		- replace with the most recently added
		- adjust (sink down)
			- sink down is the procedure for deleting the root from the heap by extracting the maximum element in a max-heap or the minimum element in a min-heap and restoring the properties is called down-heap, bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max