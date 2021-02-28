//Shortest path

// First all distance are marked as infinity
// starting node distance is marked as 0

// using a queue, we initialize with the starting distante
// we also need to have an object named parents to keep track of it
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
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    extractMin(Q, dist) {
        let minimumDistance = Number.POSITIVE_INFINITY;
        let nodeWithMinimumDistance = null;

        for(let node in Q) {
            if (dist[node] <= minimumDistance) {
                minimumDistance = dist[node]
                nodeWithMinimumDistance = node
            }
        }
        return nodeWithMinimumDistance;
    }

    //O(V^2 + E)
    shortestPath(source) {
        // create a vertex set Q
        let Q = {};
        let dist = {};
        for(let vertex in this.edges) {
            // unknown distances set to infinitu
            dist[vertex] = Number.POSITIVE_INFINITY;
            // add v to Q
            Q[vertex] = this.edges[vertex];
        }
        // distance from source is 0
        dist[source] = 0;

        while(!this.isEmpty(Q)) {
            let u = this.extractMin(Q, dist);

            // remove u from Q
            delete Q[u];

            // for each neighbor, v, of u
            for(let neighbor in this.edges[u]) {
                // current distance
                let alt = dist[u] + this.edges[u][neighbor];
                // shorter path has been found
                if (alt < dist[neighbor]) {
                    dist[neighbor] = alt;
                }
            }
        }
        return dist;
    }
}

let graph = new DirectedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 1);
graph.addEdge('C', 'A', 1);
graph.addEdge('A', 'D', 1);

console.log(graph.shortestPath('A'))