class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        let current = this.head;
        let previous = null;
        while (current !== this.tail) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        previous.next = null;
        this.length--;
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let prevHead = this.head;
        this.head = prevHead.next;
        prevHead.next = null;
        this.length--;
        return prevHead
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }
    set(index, value) {
        let oldNode = this.get(index);
        if (oldNode) {
            oldNode.val = value;
            return true;
        } return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        let prev = this.get(index - 1);
        let newNode = new Node(value);

        newNode.next = prev.next
        prev.next = newNode;
        this.length++;
        return newNode;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let toRemove = '';
        if (index === this.length - 1) {
            toRemove = this.tail;
            this.pop();
        } else if (index === 0) {
            toRemove = this.head;
            this.shift();
        } else {
            let prev = this.get(index - 1);
            toRemove = prev.next;
            prev.next = toRemove.next;
            this.length--;
        }
        return toRemove;
    }
    reverse() {
        this.tail = this.head;

        let prev = this.head;
        let curr = this.head.next;
        let next = curr.next;

        while (curr.next) {
            curr.next = prev;

            prev = curr;
            curr = next;
            next = curr.next;
        }
        
        curr.next = prev;
        this.head = curr;

        return this;
    }
}

let lista = new SinglyLinkedList();
lista.push('um')
lista.push('dois')
lista.push('três')
lista.push('quatro')
lista.remove(4);
lista.reverse();

function print(linkedList){
    let arr = [];
    let curr = linkedList.head;
    for (let i = 0; i<linkedList.length;i++){
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}

console.log(print(lista))