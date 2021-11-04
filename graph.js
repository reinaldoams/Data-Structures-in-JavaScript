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
        if (vertexA) {
        let idx = this.connections[vertexA].indexOf(vertexB);
        if (idx >= 0) this.connections[vertexA].splice(idx, 1);
        }
        if (vertexB) {
        let idx = this.connections[vertexB].indexOf(vertexA);
        if (idx >= 0) this.connections[vertexB].splice(idx, 1);
        }
    }
    removeVertex(vertex) {
        for (let connection of this.connections[vertex]){
            this.disconnect(connection, vertex);
        }
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
// exemplo.removeVertex('pimenta');

console.log(exemplo);