/**
 * Design and buld a "least recently used" cache, which evicts the least recently used item.
 * The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key)
 * and be initialized with a max size.
 * 
 * When it is full, it should evist the least recently used item.
 */

class Cache {
    constructor(maxCacheSize) {
        let maxCacheSize = maxCacheSize;
        this.map = new Map();
        this.listHead = null;
        this.listTail = null;
    }
    // get value for key and mark as most recently used
    getValue(key) {
        let item = this.map.get(key);
        if (!item) return null;

        // Move to front of list to mark as most recently used
        if (item != this.listHead) {
            this.removeFromLinkedList(item);
            this.insertAtFrontOfLinkedList(item)
        }
        return item.value;
    }

    // remove node from linked list
    removeFromLinkedList(node) {
        if (node === null) return;
        if (node.prev != null) node.prev.next = node.next;
        if(node.next != null) node.next.prev = node.prev;
        if (node === this.listTail) this.listTail = node.prev;
        if (node === this.listHead) this.listHead = node.next;
    }

    // Insert node at front of linked list
    insertAtFrontOfLinkedList(node) {
        if (this.listHead === null) {
            this.listHead = node;
            this.listTail = node;
        } else {
            this.listHead.prev = node;
            node.next = this.listHead;
            this.listHead = node;
            this.listHead.prev = null;
        }
    }

    // remove key/value pair from cache, deleting from hashtable and linked list
    removeKey(key) {
        let node = map.get(key);
        this.removeFromLinkedList(node);
        this.map.delete(key);
        return true;
    }

    // Put key, value pair in cache. Removes old value from key if necessary. Inserts pair into linked list and hash table
    setKeyValue(key, value) {
        this.removeKey(key);

        // If full, remove least recently used item from cache
        if (this.map.size >= maxCacheSize && this.listTail != null) {
            this.removeKey(this.listTail.key);
        }

        // Insert new node
        let node = new LinkedListNode(key, value);
        this.insertAtFrontOfLinkedList(node);
        this.map.set(key, node);
    }
}

class LinkedListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}