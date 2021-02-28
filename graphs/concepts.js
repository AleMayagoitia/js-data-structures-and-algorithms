// Graphs
//  Are a versatile way of representing connections between objects

// Are visual representations of connections between objects
// Examples of graphs applications
/**
 *    Application      |  Item           | Connection
 *  -------------------|-----------------|---------------------------
 *     Web site        |  Wen page       | Links
 *     Map             |  Intersection   | Road
 *     Circuit         |  Component      | Wiring
 *     Social Media    |  Person         | "Friendship" / connection
 *     Telephone       |  Phone number   | Landline
 */

 // Basic terminology
 // Vertex: a vertex is a node from which graphs are formed    (will be using V in Big O notations)
 // Edge  : an edge is the connection between nodes in a graph (will be using E in Big O notations)

 // Degree of vertex : refers to the number of edges on that vertex
 // Sparse graph: A graph is considered sparse when only a small fraction of possible connections exist between vertices
 // Dense graph: A graph considered dense when there are a lot of connections between different vertices
 // Cyclical graph: A directed graph is considered cyclical if there is a path that travels from a vertex and back to itself
 // Weights: Are values on the edges

 // Undirected graphs
 // are graphs that do not have a direction between edges
 // The edge implies a mutual connection

 // There are two common ways to represent an undirected graph
 // adjacency matrix or adjacency lists

// Adjacency lists uses a vertex as key for nodes with its neighbors stored into a list
// Adjacency matrix is a V by V matrix with each element of the matrix indicating a connection between two vertices

// if the graph is dense, its better to use an adjacency matrix