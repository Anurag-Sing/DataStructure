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

    insert(val) {
        var newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (val == current.value) return undefined
                if (val < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(val) {
        if(this.root == null) return false;
        if (val == current.value) return current

        var found = false;
        var current = this.root;

        while(current && !found) {
            if (val < current.value) {
                current.left = current;
            } else if (val > current.value) {
                current.right = current;
            } else {
                found = true
            }
        }
        if (!found) return false;
        return current;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(2);
console.log(tree);
