// Implement an algorithm to delete a node in the middle
// not necessarily the exact middle
// of a singly linked list, given only access to that node

// i.e. a -> b -> c -> d -> e -> f  nothing is returned but the new linked list a -> b -> d -> e -> f

function deleteNodeInMiddle(node) {
    // can't be resolved if the node to be deleted is the last node
    if (node === null || node.next === null) {
        return false;
    }
    let next = node.next;
    node.data = next.data;
    node.next = next.next;
    return true;


}