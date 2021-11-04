class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        while (this.values[Math.floor((index - 1) / 2)] >= 0 && this.values[index] > this.values[Math.floor((index - 1) / 2)]) {
            let temp = this.values[index]
            this.values[index] = this.values[(Math.floor((index - 1) / 2))]
            this.values[(Math.floor((index - 1) / 2))] = temp;
            index = Math.floor((index - 1) / 2);
        }
    }
    extractMax() {
        if (this.values.length === 0){
            return false;
        }
        if (this.values.length === 1){
            let temp = this.values[0];
            this.values = [];
            return temp;
        }
        ('before', this.values);
        let maxToReturn = this.values[0];

        this.values[0] = this.values.pop();
        let currIndex = 0;
        let tamanho = this.values.length - 1;
        let leftChild = this.values[(currIndex * 2) + 1];
        let rightChild = this.values[(currIndex * 2) + 2];

        while (this.values[currIndex] < leftChild || this.values[currIndex] < rightChild) {
            ('before in while', this.values);
            let temp = this.values[currIndex];
            if (leftChild > rightChild || !rightChild) {
                if (leftChild) this.values[currIndex] = leftChild;
                this.values[(currIndex * 2) + 1] = temp;
                currIndex = (currIndex * 2) + 1;
            } else {
                if (rightChild) this.values[currIndex] = rightChild;
                this.values[(currIndex * 2) + 2] = temp;
                currIndex = (currIndex * 2) + 2;
            }
            leftChild = this.values[(currIndex * 2) + 1];
            rightChild = this.values[(currIndex * 2) + 2];
            ('after in while', this.values);
        }
        return maxToReturn;
    }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(41);
newHeap.insert(39);
newHeap.insert(33);
newHeap.insert(18);
newHeap.insert(27);
newHeap.insert(12);
newHeap.insert(55);
// just printing:
for (let i = 0; i<10; i++){
console.log(newHeap.values.join() || '*****empty array*****')
console.log('returned: ', newHeap.extractMax());
}