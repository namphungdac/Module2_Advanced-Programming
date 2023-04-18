import {Tree} from "./Tree";
import {Node} from "./Node";

let tree = new Tree<number>();
tree.insertNode(new Node<number>(20));
tree.insertNode(new Node<number>(10));
tree.insertNode(new Node<number>(15));
tree.insertNode(new Node<number>(27));
tree.insertNode(new Node<number>(18));
tree.insertNode(new Node<number>(8));
tree.insertNode(new Node<number>(7));
tree.insertNode(new Node<number>(26));
tree.insertNode(new Node<number>(12));
tree.insertNode(new Node<number>(11));
tree.insertNode(new Node<number>(13));
tree.insertNode(new Node<number>(19));
tree.insertNode(new Node<number>(29));
tree.insertNode(new Node<number>(14));
tree.insertNode(new Node<number>(17));
tree.insertNode(new Node<number>(13.5));
tree.insertNode(new Node<number>(9));
// console.log(tree);
console.log("============================")
// tree.deleteNode(15);
// console.log(tree.roof.left.right);
// tree.PreorderTraversal(tree.roof);
// tree.InorderTraversal(tree.roof);
tree.PostorderTraversal(tree.roof);