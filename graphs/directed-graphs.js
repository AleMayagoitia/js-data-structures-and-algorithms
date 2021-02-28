// Directed Graphs
class DirectedGraph {
    constructor() {
        this.edges = {};
    }
    addVertex(vertex) {
        this.edges[vertex] = {}
    }
    addEdge(originVertex, destinationVertex, weight = 0) {
        this.edges[originVertex][destinationVertex] = weight;
    }
    removeEdge(originVertex, destinationVertex) {
        if (this.edges[originVertex] && this.edges[originVertex][destinationVertex]) {
            delete this.edges[originVertex][destinationVertex];
        }
    }
    // any time a vertex is deleted, all connections should too
    removeVertex(vertex) {
        for(let adjacenvertex in this.edges[vertex]) {
            this.removeEdge(adjacenvertex, vertex);
        }
        delete this.edges[vertex];
    }
}
let graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B",1);
graph.addEdge("B","C",2);
graph.addEdge("C","A",3);
