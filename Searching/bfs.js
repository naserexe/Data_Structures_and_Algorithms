function bfs(root, target) {
  // create a queue (FIFO) to store nodes and mark them as visited
  const queue = [root];
  const visited = new Set();

  // loop through the queue
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === target) {
      return true;
    }

    // mark the node as visited and add its children to the queue
    visited.add(node);
    for (const child of node.children) {
      if (!visited.has(child)) {
        queue.push(child);
      }
    }
  }

  return false;
}
