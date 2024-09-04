class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  // type your code here
  if (root === null)
    return [];

  const res = [];
  const queue = [root, null];
  let idx = 0;

  while (idx < queue.length) {
    const curNode = queue[idx++];
    if (curNode !== null) {
      if (curNode.left !== null)
        queue.push(curNode.left);
      if (curNode.right !== null)
        queue.push(curNode.right);
      res.push(curNode.value);
    } else {
      if (idx < queue.length)
        queue.push(null);
    }
    // console.log("debug-curNode: ", curNode === null ? null : curNode.value);
    // console.log("queue: ", queue, ", res: ", res);
  }

  return res;
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [1, 2, 3]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [10, 20, 30, 9, 22]");
  console.log(levelOrderTraversal(root));

  /////////////////////////////////////////////////////
  // My own test cases
  root = new Node(1);
  console.log("");
  console.log("Expecting: [1]");
  console.log(levelOrderTraversal(root));

  root.left = new Node(2);
  console.log("");
  console.log("Expecting: [1, 2]");
  console.log(levelOrderTraversal(root));

  root.right = new Node(3);
  console.log("");
  console.log("Expecting: [1, 2, 3]");
  console.log(levelOrderTraversal(root));

  root = new Node(1);
  root.left = new Node(2);
  root.left.right = new Node(3);
  console.log("");
  console.log("Expecting: [1, 2, 3]");
  console.log(levelOrderTraversal(root));

  console.log("");
  console.log(levelOrderTraversal(new Node(5)));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
// And a written explanation of your solution
