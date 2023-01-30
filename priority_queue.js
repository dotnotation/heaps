class Node{
    constructor(val, priority){
        this.val = val 
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }

    // lower priority number = highest priority 
    // write a minBinaryHeap - lower number means higher priority

    enqueue(val, priority){
        // accepts a val and priority
        // makes a new node
        let newNode = new Node(val, priority) 
        // put the new node in the right spot based on priority
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx > 0){
            let parentIdx = Math.floor((idx -1) / 2)
            let parent = this.values[parentIdx]
            if (element.priority <= parent.priority) break
            this.values[parentIdx] = element
            this.values[idx] = parent 
            idx = parentIdx
        }
    }

    dequeue(){
        // swap the first value in the values property with the last one
        const max = this.values[0]
        // pop from the values property to return the value at the end
        const end = this.values.pop()
        // need to account for the array only having one value and needing to make the array empty
        if (this.values.length > 0){
            this.values[0] = end
            // have the new root sink down to the correct spot
            this.sinkDown()
        }
        return max
    }

    sinkDown(){
                // parent index starts at 0 (the root)
        let idx = 0
        const length = this.values.length
        const element = this.values[0]

        while (true){
        // find the index of the left child (2 * index + 1) 
        // there is potential that the children can be out of bounds 
            let leftChildIdx = 2 * idx + 1
        // find the index of the right child (e * index + 2)
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap === null
        // if the left or right child is greater than the element, swap
            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority > element.priority){
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIdx
                }
            }
        // if both left and right child are larger, swap with the largest child
        // keep swapping until neither child is larger than the element
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            // the child index you swapped is now the new parent index
            idx = swap
        // return old root
        }
    }
}