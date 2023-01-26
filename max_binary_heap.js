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
        while(true){
            // create a variable called parentIndex which is the floor of (index - 1)/2
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element > parent){
                // SWAP the value of the values element at the parentIndex with the value of the element property at the child index
                this.values[parentIdx] = element
                // set the index to be the parentIndex
                this.values[idx] = parent
            }
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)