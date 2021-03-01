/**
 * You are given a list of project and a list of dependencies 
 * (which is a list of pairs of projects, where the second project is dependent on the first project)
 * 
 * All of a project's dependencies must be built before the project is
 * Find a build order that will allow the projects to be built.
 * If there is no valid build order, return an error.
 * 
 * i.e.
 * 
 * Input:
 *          projects: a,b,c,d,e,f
 *      dependencies: (a,d) , (f,b) , (b,d) , (f,a) , (d,c)
 * Output: 
 *      f,e,a,b,d,c
 */


let adjacencyList = new Map();

function addNode(value, al) {
    al.set(value, new Set());
}
function addEdge(value, origin, al) {
    al.get(origin).add(value)
}

function buildOrder(al) {
    if (al.size <= 0) return [];
    let queue = [];
    // look for nodes without dependencies and add them to the result
    for(const [key,value] of al.entries()) {
        if (value.size === 0) {
            queue.push(key);
        }
    }

    let result = [];
    while(queue.length) {
        let currentNode = queue.shift();
        if (!al.get(currentNode)) {
            continue;
        }
        // if there are no more dependencies for current node
        // push them into result and delete it from list so that we don't revisit it
        if (al.get(currentNode).size === 0) {
            result.push(currentNode);
            al.delete(currentNode)
        } else {
            continue;
        }
        // update the dependency list for all nodes left
        for(const [key,value] of al.entries()) {
            if (value.has(currentNode)) {
                value.delete(currentNode);
                queue.push(key);
            }
        }
    }
    if (al.size > 0) {
        throw new Error('The build order was not completed');
    }
    return result;

    

}
addNode('a', adjacencyList);
addNode('b', adjacencyList);
addNode('c', adjacencyList);
addNode('d', adjacencyList);
addNode('e', adjacencyList);
addNode('f', adjacencyList);
addEdge('a', 'd', adjacencyList);
addEdge('f', 'b', adjacencyList);
addEdge('b', 'd', adjacencyList)
addEdge('f', 'a', adjacencyList)
addEdge('d', 'c', adjacencyList)
// expected : e, f, a, b, d, c (or f, e, a, b, d, c )

console.log(buildOrder(adjacencyList)); // [ 'e', 'f', 'a', 'b', 'd', 'c' ]

// example 2
let adjacencyList2 = new Map();
addNode('a', adjacencyList2);
addNode('b', adjacencyList2);
addNode('c', adjacencyList2);
addNode('d', adjacencyList2);
addNode('e', adjacencyList2);
addNode('f', adjacencyList2);
addNode('g', adjacencyList2);
addEdge('f', 'c', adjacencyList2);
addEdge('f', 'b', adjacencyList2);
addEdge('f', 'a', adjacencyList2);
addEdge('b', 'a', adjacencyList2)
addEdge('c', 'a', adjacencyList2)
addEdge('a', 'e', adjacencyList2)
addEdge('b', 'e', adjacencyList2)
addEdge('d', 'g', adjacencyList2)

console.log(buildOrder(adjacencyList2)); // [ 'd', 'f', 'g', 'b', 'c', 'a', 'e' ]
