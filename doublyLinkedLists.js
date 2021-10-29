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
        if (!oldTail){
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
        return oldTail.val;
    }
}

let lista = new DoublyLinkedList();
lista.push('oi');
lista.push('td');
lista.pop();
lista.pop();
console.log(lista);