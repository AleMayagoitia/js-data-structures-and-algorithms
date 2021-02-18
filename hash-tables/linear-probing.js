// Linear Probing

// To work around collisions 
// Linear probing works by finding the next available index in the array via incremental trials
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

        // Linear probing
        while(this.keys[hashedIndex] !== null) {
            hashedIndex++;
            hashedIndex = hashedIndex % this.size;
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }
    get(key) {
        let hashedKey = this.hash(key);
        while(this.keys[hashedKey] != key) {
            hashedIndex++;
            hashedIndex = hashedIndex % this.size;
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