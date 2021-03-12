/**
 * Given an integer, print an English phrase that describes the integer
 * i.e. One-Thousand, Two Hundred Thirty Four
 * 
 */

let small = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifthteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
let bigs = ['', 'Thousand', 'Million', 'Billion'];
let hundred = 'Hundred';
let negative = 'Negative'
// 1,134
// 110,452 -> Hundred Ten Thousand, Four Houndred Fifty Two
convert(1134)

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }
    addAtLast(value) {
        if (!this.root) {
            this.root = new LinkedListNode(value);
            return;
        }

        let current = this.root;
        while(current.next) {
            current = current.next;
        }
        current.next =  new LinkedListNode(value);
    }
    addAtTop(value) {
        let node = new LinkedListNode(value);
        node.next = this.root;
        this.root = node;
    }
}

function convert(num) {
    if(num === 0) {
        return smalls[0]
    } else if (num < 0) {
        return negative + ' ' + convert(-1 * num);
    } 
    let parts = new LinkedList();
    let chunkCount = 0;
    while(num > 0) {
        if (num % 1000 !== 0) {
            let chunk = convertChunk(num % 1000) + ' ' + bigs[chunkCount];
            parts.addAtTop(chunk);
        }
        num /= 1000; // shift chink
        chunkCount++
    }
    return listToString(parts)
}
function convertChunk(number) {
    let parts = new LinkedList();

    // convert hundreds place
    if (number >= 100) {
        parts.addAtLast(small[number / 100]);
        parts.addAtLast(hundred);
        number %= 100;
    }

    // Convert tens place
    if (number >= 10 && number <= 19) {
        parts.addAtLast(small[number]);
    } else if(number >= 20) {
        parts.addAtLast(tens[number / 10]);
        number %=10;
    }

    // Converet ones place
    if(number >= 1 && number <= 9) {
        parts.addAtLast(smalls[number]);
    }
    return listToString(parts)

}

function listToString(list) {
    let result = '';
    let current = list.root;
    while(current) {
        result += current.value;
        current = current.next
    }
    return result;
}


