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
    extractMax() {
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        let curr = 0;
        let tamanho = this.values.length - 3;
        while(curr < tamanho){
            let leftChild = this.values[(curr * 2) + 1];
            let rightChild = this.values[(curr * 2) + 2];
            if (leftChild && rightChild && leftChild > rightChild) {
                let temp = this.values[curr];
                if (leftChild) this.values[curr] = leftChild;
                this.values[(curr * 2) + 1] = temp;
                curr = (curr * 2) + 1;
            } else {
                let temp = this.values[curr];
                if (rightChild) this.values[curr] = rightChild;
                this.values[(curr * 2) + 2] = temp;
                curr = (curr * 2) + 2;
            }
        }
        console.log('here', this)
        return this;
    }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(1);
newHeap.insert(2);
newHeap.insert(500);
newHeap.insert(300);
newHeap.insert(400);
newHeap.insert(999);
console.log(newHeap);
console.log(newHeap.extractMax());