class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        while(this.values[Math.floor((index-1)/2)] >= 0 && this.values[index] > this.values[Math.floor((index-1)/2)]){
            let temp = this.values[index]
            this.values[index] = this.values[(Math.floor((index-1)/2))]
            this.values[(Math.floor((index-1)/2))] = temp;
            index = Math.floor((index-1)/2);
        }
    }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(1);
newHeap.insert(2);
newHeap.insert(500);
newHeap.insert(300);
newHeap.insert(400);
console.log(newHeap);