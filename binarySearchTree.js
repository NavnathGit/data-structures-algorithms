// Binary Search Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    // right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                    console.log(currentNode)
                }
                else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                    console.log('right')
                }
                else if (currentNode.value === value) {
                    return currentNode;
                }
            }
            console.log('Value not Found')
            return false;
        }
    }
    remove(value) {
    }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.lookup(171);
//console.log(tree);
//      9
//   4     20
//1    6 15   170
//console.log(JSON.stringify(traverse(tree.root)));
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}