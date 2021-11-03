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
    hasValue(val){
        console.log(`*****searching for ${val}...*****`)
        if (!this.root){
            return false;
        }
        let curr = this.root;
        console.log('root: ', curr.val)
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
    breadthFirstSearch(){
        let visited = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            node.left ? queue.push(node.left) : '';
            node.right ? queue.push(node.right) : '';
            visited.push(node.val);
        }
        return visited;
    }
    depthFirstPreOrder(){
        let visited = [];
        function traverse(node) {
            visited.push(node.val);
            node.left ? traverse(node.left) : '';
            node.right ? traverse(node.right) : '';
        }
        traverse(this.root);
        return visited;
    }
    depthFirstPostOrder(){
        let visited = [];
        function traverse(node) {
            node.left ? traverse(node.left) : '';
            node.right ? traverse(node.right) : '';
            visited.push(node.val);
        }
        traverse(this.root);
        return visited;
    }
    depthFirstInOrder(){
        let visited = [];
        function traverse(node) {
            node.left ? traverse(node.left) : '';
            visited.push(node.val);
            node.right ? traverse(node.right) : '';
        }
        traverse(this.root);
        return visited;
    }
}

let arvore = new BinarySearchTree();
arvore.insert(10);
arvore.insert(6);
arvore.insert(15);
arvore.insert(3);
arvore.insert(8);
arvore.insert(20);

console.log(arvore);
console.log(arvore.breadthFirstSearch());
console.log(arvore.depthFirstPreOrder());
console.log(arvore.depthFirstPostOrder());
console.log(arvore.depthFirstInOrder());