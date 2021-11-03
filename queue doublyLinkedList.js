class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop() {
        let oldTail = this.tail;
        if (!oldTail) {
            return undefined
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            oldTail.prev = null
            this.tail.next = null;
        }
        this.length--;
        return oldTail;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
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
        if (curr.prev) {
            tempArr.push('p: ' + curr.prev.val)
        } else tempArr.push('p: ' + 'null');
        tempArr.push('c: ' + curr.val);
        if (curr.next) {
            tempArr.push('n: ' + curr.next.val);
        } else tempArr.push('n: ' + 'null');
        arr.push(tempArr);
        curr = curr.next
    }
    console.log(arr);
}

let lista = new Queue();
lista.push('item1');
lista.push('item2');
lista.push('item3');
lista.push('item4');
lista.push('item5');
lista.push('item6');
lista.push('item7');
lista.push('item8');
lista.push('item9');
lista.push('item10');
lista.pop();
lista.pop();
print(lista);
console.log('length: ', lista.length);


// console.log(lista.get(-1));
// console.log(lista.get(4).val);
// console.log(lista.get(4).val);
// console.log(lista.get(2).val);
// console.log(lista.get(1).val);
// console.log(lista.get(0).val);
// console.log(lista.get(5));