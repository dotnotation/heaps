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
        // pop from the values property to return the value at the end
        // have the new root sink down to the correct spot
    }

    sinkDown(){
        // parent index starts at 0 (the root)
        // find the index of the left child (2 * index + 1) 
        // find the index of the right child (e * index + 2)
        // if the left or right child is greater than the element, swap
        // if both left and right child are larger, swap with the largest child
        // the child index you swapped is now the new parent index
        // keep swapping until neither child is larger than the element
        // return old root
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)