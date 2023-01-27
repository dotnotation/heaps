class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        // push the value into the values property 
        this.values.push(element)
        // bubble the value up to the correct spot
        this.bubbleUp()
    }

    bubbleUp(){
        // create a variable called index which is the length of the values property - 1
        let idx = this.values.length - 1
        const element = this.values[idx]
        // keep looping as long as the values element at the parentIndex is less than the values element at the child index
        while(idx > 0){
            // create a variable called parentIndex which is the floor of (index - 1)/2
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent) break 
            // SWAP the value of the values element at the parentIndex with the value of the element property at the child index
            this.values[parentIdx] = element
            // set the index to be the parentIndex
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax(){
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
                if (leftChild > element){
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap()
heap.insert(55)