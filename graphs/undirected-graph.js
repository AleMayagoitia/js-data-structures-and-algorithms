// Undirected graph
class UndirectedGraph {
    constructor() {
        this.edges = {}
    }
    addVertex(vertex) {
        this.edges[vertex] = {}
    }

    addEdge(vertex1, vertex2, weight = 0) {
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }

    removeEdge(vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
            delete this.edges[vertex1][vertex2];
        }
        if (this.edges[vertex2] && this.edges[vertex2][vertex1]) {
            delete this.edges[vertex2][vertex1];
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

let graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1,2,1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(2,3,8);
graph.addEdge(3,4,10);
graph.addEdge(4,5,100);
graph.addEdge(1,5,88);
graph.removeVertex(5);
graph.removeVertex(1);
graph.removeEdge(2,3);
