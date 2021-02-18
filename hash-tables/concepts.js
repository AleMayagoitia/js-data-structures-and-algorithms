// Hash tables

// A hash table is a fixed data structure in which the size is defined at the start
// They are excellent for quick storage and retrieval of data based on key-value pairs

// A Hash table should contain two main functions:
// put() and get()

// put() is used for storing data into the hash table
// get() is used for retrieving data from the hash table
// both have time complexity of O(1)


// local storage is an example of a data structure based on hash tables
// localStorage.setItem('key', 'value')
// localStorage.getItem('key'

// Hash techniques
// The most important part of a hash table is the hash function
// The has function should convert the specified key into an index for an array that stores all data

// There are three primary requirements for a good hash function
// 1 - Deterministic: equal keys produce equal hash values
// 2 - Efficiency :   It should be O(1) time
// 3 - Uniform distribution: It makes the most use of the array

