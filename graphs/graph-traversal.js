// Graph traversal
// two common approaches are breadth first search and depth first search

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

    
    // Breadth First Search
    // refers to a search algorithm in a graph that focuses on connected nodes 
    // and their connected nodes in order
    // O(V + E)
    traverseBFS(vertex, fn) {
        let queue = [vertex];
        let visited = {};
        while (queue.length) {
            const currentVertex = queue.shift();

            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                fn(currentVertex);
                for(let adjacentVertex in this.edges[currentVertex]) {
                    queue.push(adjacentVertex)
                }
            }
        }
    
    }

    // Depth First Search
    // refers to a search algorithm in a graph that focuses on traversing deep into one connection 
    // before visiting the other connections
    // O(V + E)
    traverseDFS(vertex, fn) {
        let visited = {};
        const traverseDFSHelper = function (vertex, visited, fn, edges) {
            visited[vertex] = true;
            fn(vertex);
            for(let adjacentVertex in edges[vertex]) {
                if (!visited[adjacentVertex]) {
                    traverseDFSHelper(adjacentVertex, visited, fn, edges);
                }
            }
        }
        traverseDFSHelper(vertex, visited, fn, this.edges);
    }
}

let graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B",1);
graph.addEdge("B","C",2);
graph.addEdge("C","A",3);

graph.traverseBFS("B", (v) => console.log(v));
graph.traverseDFS("B", (v) => console.log(v));