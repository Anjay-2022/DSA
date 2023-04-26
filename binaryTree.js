class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {

    //var root =15
    constructor() {
        this.root = null;                           // an instance created
    }
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null)//recursion base condition
            return null;

        else if (key < node.data) {                     //key is lesser than current root
            node.left = this.removeNode(node.left, key);//5,5
            return node;
        }
        else if (key > node.data) {                     //key is bigger than current root
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {                                         // key equal to current node
            if (node.left === null && node.right === null) {    //current node has no child
                node = null;
                return node;
            }
            if (node.left === null) {                           //current node has  right child only
                node = node.right;
                return node;
            }
            else if (node.right === null) {                    //current node has  left child only
                node = node.left;
                return node;
            }
            // Deleting node with two children minimum node of the right subtree is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    // Performs inorder traversal of a tree
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    // Performs preorder traversal of a tree   
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    // Performs postorder traversal of a tree
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    //  finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    // returns root of the tree
    getRootNode() {
        return this.root;
    }

    // search for a node with given data
    search(node, data) {
        // if trees is empty return null
        if (node === null)
            return null;

        // if data is less than node's data
        // move left
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is more than node's data
        // move right
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data
        // return node
        else
            return node;
    }
}
// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  

var root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with no children
BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17


var root = BST.getRootNode();

// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with one child
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17


var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with two children
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

console.log("preorder traversal");
BST.preorder(root);
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

console.log("level order traversal");
/* function to print level order traversal of tree */
function printLevelOrder() {
    var h = height(root);//4
    var i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

/*
 * Compute the "height" of a tree -- the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 */
function height(node) {//8
    if (node == null)
        return 0;
    else {
        /* compute height of each subtree */
        var lheight = height(node.left);//3
        var rheight = height(node.right);//3

        /* use the larger one */
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

/* Print nodes at the current level */
function printCurrentLevel(node, level) {
    if (node == null)
        return;
    if (level == 1)
        console.log(node.data + " ");
    else if (level > 1) {
        printCurrentLevel(node.left, level - 1);          
        printCurrentLevel(node.right, level - 1);
    }
}
printLevelOrder(root);
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27




//output of BFS  8 3 10 1 6 14 4 7 13 