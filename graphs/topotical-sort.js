// Topotical Sort
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

    // It can be important to know which node should be processed first for various applications
    // It works like a DFS from a node until its connected nodes are recursively exhausted and 
    // by adding it to the stack until the connected nodes are all visited
    topologicalSortUtil() {
        let visited = new Set();
        let stack = [];

        const topologicalSortHelper = function(v, visited, stack, edges) {
            visited.add(v);
            for(let item in edges[v]) {
                if (!visited.has(item)) {
                    topologicalSortHelper(item, visited, stack, edges)
                }
            }
            stack.unshift(v);
        }

        for(let item in this.edges) {
            if (!visited.has(item)) {
                topologicalSortHelper(item, visited, stack, this.edges);
            }
        }
        return stack;
    }
}

let graph = new DirectedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('B', 'A', 1);
graph.addEdge('D', 'C', 1);
graph.addEdge('D', 'B', 1);
graph.addEdge('A', 'F', 1);
graph.addEdge('E', 'C', 1);

console.log(graph.topologicalSortUtil())