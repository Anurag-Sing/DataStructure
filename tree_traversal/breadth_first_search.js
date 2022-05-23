class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeSearch {
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

    BFS() {
        var data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }
}

var tree = new TreeSearch();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(2);
console.log(tree.BFS());

 

