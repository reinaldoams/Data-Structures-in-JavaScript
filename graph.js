class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Graph {
    constructor() {
        this.connections = {};
    }
    addVertex(value) {
        if (!this.connections[value]) {
            this.connections[value] = [];
        }
    }
    connect(vertexA, vertexB) {
        this.connections[vertexA].push(vertexB);
        this.connections[vertexB].push(vertexA);
    }
    disconnect(vertexA, vertexB){
        let idx = this.connections[vertexA].indexOf(vertexB);
        if (idx >= 0) this.connections[vertexA].splice(idx, 1);
        idx = this.connections[vertexB].indexOf(vertexA);
        if (idx >= 0) this.connections[vertexB].splice(idx, 1);
    }
    removeVertex(vertex) {
        let vertexToRemove = this.connections[vertex];
        // implementation iterating always in the first item in the vertexToRemove array, because the item will always be removed by the disconnect method
        let tamanho = vertexToRemove.length;
        for (let i = 0; i<tamanho; i++){
            this.disconnect(vertexToRemove[0], vertex)
        }
        // below there's another possible implementation, by making a copy of vertexToRemove items before iterating, and then iterate using this copy

        // let arrCopy = [];
        // for (let item of vertexToRemove){
        //     arrCopy.push(item);
        // }
        // for (let item of arrCopy){
        //     this.disconnect(item, vertex)
        // }
        delete this.connections[vertex]
    }
}

let exemplo = new Graph();
exemplo.addVertex('sal');
exemplo.addVertex('pimenta');
exemplo.addVertex('cheiroVerde');
exemplo.addVertex('paprica');
exemplo.addVertex('chimichurri');
exemplo.addVertex('cebola');
exemplo.addVertex('alho');
exemplo.connect('sal', 'pimenta');
exemplo.connect('cebola', 'alho');
exemplo.connect('alho', 'chimichurri');
exemplo.connect('paprica', 'sal');
exemplo.connect('pimenta', 'cheiroVerde');

console.log(exemplo);
exemplo.removeVertex('pimenta');
console.log(exemplo);