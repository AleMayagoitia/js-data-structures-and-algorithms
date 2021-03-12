/***
 * Imagine you are reading in a stream of integers. Periodicallyy, you wish to be able to look up the rank of a number x 
 * the number of values less than or equal to x.
 * 
 * Implement a method track(x) which is called when each number is generated, and the method
 * getRankOfNumber(x), which return the number of values less than or equal to x (nor includinf the instance of x itself)
 * 
 * i.e.
 * stram order of appearance = [5,1,4,4,5,9,7,13,3];
 * getRankNumber(1) = 0 // values:
 * getRankNumber(3) = 1 // values: s[1] = 1
 * getRankNumber(4) = 3 // values: s[1] = 1, s[2] = 4, s[8] = 3
 */

// implement a binary search tree 
class RankNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.left_size = 0;
        this.right_size = 0;
    }
    insert(value) {
        if (value <= this.value) {
            if(this.left != null) {
                this.left.insert(value);
            } else {
                this.left = new RankNode(value);
                this.left_size++
            }
        } else {
            if(this.right != null) {
                this.right.insert(value);
            } else {
                this.right = new RankNode(value);
                this.right_size++
            }
        }
    
    }
    getRank(d) {
        if (d === this.value) return this.left_size;
        else if (d < this.value) {
            if (this.left === null) {
                return -1;
            } else return this.left.getRank(d)
        } else {
           let rightRank = this.right === null ? -1 : this.right.getRank(d);
           if (rightRank === -1) return -1;
           else return this.left_size + 1 + rightRank;
        }

    }
}
let root = null;
function track(number) {
    if (root === null) {
        root = new RankNode(number);
    } else {
        root.insert(number);
    }

}
function getRankNumber(number) {
    return root.getRank(number);
}
