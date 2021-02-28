// Advanced Strings
// Tries

// A trie is a special type of trie used commonly for searching strings and matching on sorted strings
// At each level, nodes can branch off to form complete words

// A trie is implemented by using a nested object where each level has its direct children as keys
// A trie node can be formed by using an object to store the children

// The trie has a root node that is instantiated in the constructor of Trie class

// A trie is an effective data structure when there are multiple strings with common prefixes
// For searching one specific string pattern in one specific string a trie is not efficient because of the additional memory required

class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            let ch = word.charAt(i);
            let node = current.children[ch];
            if (!node) {
                node = new TrieNode();
                current.children[ch] = node
            }
            current = node;
        }
        current.endOfWord = true;
    }
    search(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            var ch = word.charAt(i);
            let node = current.children[ch];
            if (node == null) {
                return false;
            }
            current = node;
        }
        return current.endOfWord;
    }
    // to delete an element of a trie, we should traverse the root node until we reach the last character of the word
    // then, each node that doesn't have any other children should be deleted
    // O(W)
    delete(word) {
        const deleteHelper = function(current, word, index) {
            if (index === word.length) {
                // when end is reached only delete if current .endOfWord is true
                if (!current.endOfWord) {
                    return false;
                }
                current.endOfWord = false;
                // if current has no other mapping then return true
                return Object.keys(current.children).length == 0;
            }
            let ch = word.charAt(index);
            let node = current.children[ch];
            if (!node) {
                return false
            }
            let shouldDeleteCurrentNode = deleteHelper(node, word, index+1);
            if (shouldDeleteCurrentNode) {
                delete current.children[ch];
                // return true if no mappings are left 
                return Object.keys(current.children).length == 0;
            }
            return false;
        }
        deleteHelper(this.root, word, 0);
    }
}

let trie = new Trie();
trie.insert('sammie');
trie.insert('sam');
trie.insert('simran');
console.log(trie.search('sam'));// true
console.log(trie.search('simran'));// true
console.log(trie.search('sammie'));// true
console.log(trie.search('samantha')); // false
console.log(JSON.stringify(trie.root))
trie.delete('sam')
console.log(trie.search('sam')); // false
console.log(trie.search('sammie')); // true


