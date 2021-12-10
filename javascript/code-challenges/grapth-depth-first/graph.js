const Node = require('./node');
const Edge = require('./edge');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.numNodes = 0;
  }

  size() {
    return this.numNodes;
  }

  addNode(value) {
    let node = new Node(value);
    this.numNodes++;

    //2nd arg is an array to store edges
    this.adjacencyList.set(node, []);

    return node;
  }

  //adds directed edge
  addEdge(startNode, endNode, weight = 0) {
    if(!this.adjacencyList.has(startNode) && !this.adjacencyList.has(endNode)) {
      throw new Error('Invalid nodes supplied as arguments');
    }

    let neighbors = this.adjacencyList.get(startNode);
    let edge = new Edge(endNode, weight);
    neighbors.push(edge);
  }

  getNodes() {
    let nodes = [];
    this.adjacencyList.forEach((value, key) => {
      nodes.push(key);
    });

    if(nodes.length === 0) return null;

    return nodes;
  }

  getNeighbors(node) {
    if(!this.adjacencyList.has(node)) {
      return null;
    }

    return [...this.adjacencyList.get(node)];
  }

  breadthFirst(startNode) {
    if(!startNode) return null;

    let q = [];
    let visited = new Set();

    q.push(startNode);
    visited.add(startNode);

    while(q.length) {
      const current = q.shift();

      let neighbors = this.getNeighbors(current);

      for(let edge of neighbors) {
        let neighbor = edge.node;
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          q.push(neighbor);
        }
      }
    }

    return [...visited];
  }

  depthFirst(startNode) {
    if(!startNode) return null;

    let stk = [];
    let visited = new Set();

    stk.push(startNode);
    while(stk.length) {
      const current = stk[stk.length - 1]; //stack 'peek'

      let neighbors = this.getNeighbors(current);

      let hasUnvisitedNeighbors = false;

      for(let edge of neighbors) {
        let neighbor = edge.node;

        if(!visited.has(neighbor)) {
          hasUnvisitedNeighbors = true;
          break;
        }
      }

      if(hasUnvisitedNeighbors) {
        visited.add(current);
        for(let edge of neighbors) {
          let neighbor = edge.node;

          if(!visited.has(neighbor)) {
            stk.push(neighbor);
          }
        }
      } else {
        visited.add(current);
        stk.pop();
      }
    }
    return [...visited];
  }
}

module.exports = Graph;


