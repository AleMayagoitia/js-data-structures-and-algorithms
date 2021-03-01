/**
 * Given a directed graph and two nodes (S and E), design an algorithm to 
 * find out wether there is a route from S to E
 */

 // DFS

 let adjacencyList = new Map();

 function addNode(value) {
    adjacencyList.set(value, []);

 }

 function addEdge(origin, destination) {
     adjacencyList.get(origin).push(destination);
     adjacencyList.get(destination).push(origin);
 }

 function hasPath(origin, destination) {
    let visited = new Set();
    let destinationFound = false;
    let hasPathHelper = function (currentNode) {
        if(destinationFound) return;

        if (!visited.has(currentNode)) {
            if (currentNode === destination) {
                destinationFound = true;
            }
            visited.add(currentNode);

            if (adjacencyList.get(currentNode).length) {
                adjacencyList.get(currentNode).forEach(n => {
                    if (!visited.has(n)) {
                        hasPathHelper(n);
                    }
                })

            }
        }
        
    }
    hasPathHelper(origin);
    return destinationFound;
 }

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    // ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
airports.forEach(airPort => {
    addNode(airPort);
});

routes.forEach(([origin, destination]) => {addEdge(origin, destination)});

console.log(hasPath('PHX', 'MEX')) // true
console.log(hasPath('JFK', 'OKC')) // false

// BFS

function breathFirstSearch(start, end) {
    if (start === end) return true;

    let queue = [start];
    let visited = new Set();

    while(queue.length) {
        let currentNode = queue.shift();
        if (visited.has(currentNode)) continue;
        if (currentNode === end) return true;

        visited.add(currentNode);
        adjacencyList.get(currentNode).forEach(edge => {
            queue.push(edge);
        });
    }
    return false;
}

console.log(breathFirstSearch('PHX', 'MEX')) // true
console.log(breathFirstSearch('JFK', 'OKC')) // false

/***
 * 
 * DFS is a bit simpler to implement since it can be done in a simple recursion but it may traverse one adjacency node very deeply before goingonto the immediate neighbors
 * BFS can also be useful to find the shortest path
 */