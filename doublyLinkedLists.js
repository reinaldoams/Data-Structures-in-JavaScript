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
        if (!this.tail){
            return undefined
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            oldTail = this.tail;
            oldTail.prev = null
            this.tail = oldTail.prev;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }
}

let lista = new DoublyLinkedList();
lista.push('oi');
lista.push('td');
console.log(lista);