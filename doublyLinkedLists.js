class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
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
    shift() {
        let oldHead = this.head;
        if (!oldHead) {
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }
    unshift(val) {
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
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index > Math.floor((this.length - 1) / 2)) {
            let current = this.tail;
            for (let i = this.length - 1; i >= 0; i--) {
                if (i === index) {
                    return current;
                } else {
                    current = current.prev;
                }
            }
        } else {
            let current = this.head;
            for (let i = 0; i < this.length; i++) {
                if (i === index) {
                    return current
                } else {
                    current = current.next;
                }
            }
        }
    }
    set(value, index) {
        let toChange = this.get(index);
        if (toChange) {
            toChange.val = value;
            return true;
        } return false;
    }
    insert(value, index) {
        if (index < 0 || index >= this.length) {
            return false;
        } else if (index === 0) {
            return this.unshift(value);
        } else if (index === this.length) {
            return this.push(value);
        } else {
            let newNode = new Node(value);
            let newNodePrev = this.get(index - 1);
            let newNodeNext = this.get(index);
            newNodePrev.next = newNode;
            newNodeNext.prev = newNode;
            newNode.prev = newNodePrev;
            newNode.next = newNodeNext;
            this.length++;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        } else if (index === 0) {
            return this.shift;
        } else if (index === this.length - 1) {
            return this.pop;
        } else {
            let toRemove = this.get(index);
            if (toRemove) {
                let temp = toRemove.next;
                toRemove.prev.next = toRemove.next;
                toRemove.next.prev = toRemove.prev;
                toRemove.prev = null;
                toRemove.next = null;
                this.length--;
                return toRemove;
            }
        }
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

let lista = new DoublyLinkedList();
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
print(lista);
console.log('length: ', lista.length);
lista.insert('addingAtZero', 0);
print(lista);
console.log('length: ', lista.length);
lista.remove(3);
console.log('removing at index 3')
print(lista)
console.log('length: ', lista.length);
lista.remove(5);
console.log('removing at index 5')
print(lista)
console.log('length: ', lista.length);
lista.remove(2);
console.log('removing at index 2')
print(lista)
console.log('length: ', lista.length);


// console.log(lista.get(-1));
// console.log(lista.get(4).val);
// console.log(lista.get(4).val);
// console.log(lista.get(2).val);
// console.log(lista.get(1).val);
// console.log(lista.get(0).val);
// console.log(lista.get(5));