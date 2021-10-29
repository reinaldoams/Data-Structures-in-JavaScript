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
        if (index < 0 || index >= this.length){
            return null;
        }
        if (index > Math.floor((this.length -1)/2)){
            let current = this.tail;
            for (let i = this.length-1; i>=0; i--){
                if (i === index){
                    return current;
                } else {
                    console.log(current.val);
                    current = current.prev;
                }
            }
        } else {
            let current = this.head;
            for (let i = 0; i<this.length;i++){
                if (i === index){
                    return current
                } else {
                    console.log(current.val)
                    current = current.next;                    
                }
            }
        }
    }
}

let lista = new DoublyLinkedList();
lista.push('oi1');
lista.push('oi2');
lista.push('oi3');
lista.push('oi4');
lista.push('oi5');
lista.push('oi6');
lista.push('oi7');
lista.push('oi8');
lista.push('oi9');
lista.push('oi10');

// console.log(lista.get(-1));
// console.log(lista.get(4).val);
console.log(lista.get(4).val);
// console.log(lista.get(2).val);
// console.log(lista.get(1).val);
// console.log(lista.get(0).val);
// console.log(lista.get(5));
