// Quadratic Probing

// To work around collisions 
// Uses perfect squares instead of incrementin 1 each time
// uses wuadratic functions to generate incremental trials for collisions

// This gives a more uniformly distributed result
class HashTable {
    constructor(size) {
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }
    put(key, value) {
        if (this.limit > this.size) throw 'hash table is full!!!';
        let hashedIndex = this.hash(key);
        let squareIndex = 1;

        // Quadratic Probing
        while(this.keys[hashedIndex] != null) {
            hashedIndex += Math.pow(squareIndex, 2);
            squareIndex++;
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }
    get(key) {
        let hashedKey = this.hash(key);
        let squareIndex = 1;

        while(this.keys[hashedKey] != key) {
            hashedIndex += Math.pow(squareIndex, 2);
            squareIndex++
        }
        return this.values[hashedIndex];
    }
    hash(key) {
        // Check if int
        if (!Number.isInteger(key)) throw 'must be an int';
        return key % this.size;
    }
    initArray(size) {
        let arr = [];
        for(let i =0; i< size; i++) {
            arr.push(null);
        }
        return arr;
    }
}

let exampleTable = new HashTable(13);
exampleTable.put(7,'hi');
exampleTable.put(20,'hello');
exampleTable.put(33,'hola');
exampleTable.put(46,'beautiful');
exampleTable.put(59,'how');
exampleTable.put(72,'are');
exampleTable.put(85,'you');
exampleTable.put(98,'today');
console.log(exampleTable.keys);
console.log(exampleTable.values);