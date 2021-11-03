class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    dequeue() {
        let oldHead = this.head;
        if (!oldHead) {
            return undefined
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

function print(linkedList) {
    let arrPrev = [];
    let arr = [];
    let arrNext = [];
    let curr = linkedList.head;
    while (curr) {
        let tempArr = [];
        tempArr.push('c: ' + curr.val);
        if (curr.next) {
            tempArr.push('n: ' + curr.next.val);
        } else tempArr.push('n: ' + 'null');
        arr.push(tempArr);
        curr = curr.next
    }
    arr.push('length: ' + linkedList.length)
    console.log(arr);
}

let lista = new Queue();
lista.enqueue('item1');
lista.enqueue('item2');
lista.enqueue('item3');
lista.enqueue('item4');
lista.enqueue('item5');
lista.enqueue('item6');
lista.enqueue('item7');
lista.enqueue('item8');
lista.enqueue('item9');
lista.enqueue('item10');
print(lista);
lista.dequeue();
print(lista);
lista.dequeue();
print(lista);
lista.enqueue('new');
print(lista);


// console.log(lista.get(-1));
// console.log(lista.get(4).val);
// console.log(lista.get(4).val);
// console.log(lista.get(2).val);
// console.log(lista.get(1).val);
// console.log(lista.get(0).val);
// console.log(lista.get(5));