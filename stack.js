class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let prevHead = this.head;
        this.head = prevHead.next;
        prevHead.next = null;
        this.size--;
        return prevHead
    }
}

let lista = new Stack();
lista.push('um')
lista.push('dois')
lista.pop()
lista.pop()
lista.push('três')
lista.push('quatro')

console.log(lista)