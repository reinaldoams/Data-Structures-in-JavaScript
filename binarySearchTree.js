class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
        } else {
            let curr = this.root;
            while (true) {
                if(curr.val === val) {
                    return undefined;
                }
                if (curr.val > val) {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = new Node(val);
                        return this;
                    }
                } else {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = new Node(val);
                        return this;
                    }
                }
            }
            curr = val;
            this.size++;
        }
        return this;
    }
    find(val){
        console.log(`*****searching for ${val}...*****`)
        if (!this.root){
            return false;
        }
        let curr = this.root;
        while(true){
            if (curr.val === val){
                return true
            }
            if (curr.val > val){
                if(curr.left){
                    curr = curr.left;
                    console.log('to left', curr.val);
                } else return false;
            } else {
                if(curr.right){
                    curr = curr.right;
                    console.log('to right', curr.val)                    
                } else return false;
            }
        }
    }
}

let arvore = new BinarySearchTree();
arvore.root = new Node(100);
arvore.insert(5);
arvore.insert(50);
arvore.insert(700);
arvore.insert(7);

console.log(arvore);
console.log(arvore.find(5))
console.log(arvore.find(6))
console.log(arvore.find(7))