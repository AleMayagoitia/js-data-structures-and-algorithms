// CHECK WETHER A TREE IS A MIRROR OF ANOTHER TREE
// There are three possible cases
// 1 - Their root must be the same
// 2 - the left subtree root for a and the right subtree of b are mirrors
// 3 - the right subtree of a and the left of b are mirrors

function isMirrorTrees (tree1, tree2) {
    // base case, both empty
    if (!tree1 && !tree2) return true;

    // One of them is empty, since only one is empry, no mirrors
    if (!tree1 || !tree2) return false;

    // Both non-empty, compare them recursively
    // Pass left of one and right of the other
    let checkLeftwithRight = isMirrorTrees(tree1.left, tree2.right);
    let checkRightWithLeft = isMirrorTrees(tree1.right, tree2.left);

    return tree1.value === tree2.value && checkLeftwithRight && checkRightWithLeft;
}

let node1 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
};
let node2 = {
    value: 3,
    left: {
        value: 2
    },
    right: {
        value: 1
    }
}

let node3 = {
    value: 3,
    left: {
        value: 1
    }, 
    right: {
        value: 2,
        left: {
            value: 2.5
        }
    }
}

console.log(isMirrorTrees(node1, node2)); // true
console.log(isMirrorTrees(node2, node3)); // false