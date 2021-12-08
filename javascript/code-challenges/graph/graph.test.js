const Graph = require('./graph');

describe('Tests the Graph data structure implementation', () => {
  let graph1 = new Graph();
  let A = graph1.addNode('A');
  let B = graph1.addNode('B');
  let C = graph1.addNode('C');
  let D = graph1.addNode('D');
  let E = graph1.addNode('E');
  let F = graph1.addNode('F');
  let G = graph1.addNode('G');
  let H = graph1.addNode('H');

  graph1.addEdge(A, D, 10); graph1.addEdge(A, B, 20); graph1.addEdge(A, C);
  graph1.addEdge(B, E); graph1.addEdge(C, F); graph1.addEdge(C, G); graph1.addEdge(D, G);
  graph1.addEdge(E, H); graph1.addEdge(F, H);

  it('Can successfully add a node to the graph', () => {
    let graph = new Graph();
    let node = graph.addNode('1');
    graph.addNode('2');
    graph.addNode('3');

    expect(graph.breadthFirst(node).has(node)).toBe(true);
  });

  it('Can successfully add an edge can to the graph', () => {
    let graph = new Graph();
    let startNode = graph.addNode('1');
    let endNode = graph.addNode('2');
    graph.addNode('3');

    graph.addEdge(startNode, endNode);

    expect(graph.adjacencyList.get(startNode)).toEqual([{'node': {'value': '2'}, 'weight': 0}]);
  });

  it('Can successfully return a collection of all nodes in the graph', () => {
    let nodes = graph1.getNodes();
    //breadth first won't work if some nodes are not connected/don't have edges

    expect(nodes).toEqual([{'value': 'A'}, {'value': 'B'}, {'value': 'C'}, {'value': 'D'}, {'value': 'E'}, {'value': 'F'}, {'value': 'G'}, {'value': 'H'}]);
  });

  it('Can retrieve all appropriate neighbors in the graph for a given node', () => {
    let neighbors = graph1.getNeighbors(A);
    expect(neighbors).toEqual([{'node': {'value': 'D'}, 'weight': 10}, {'node': {'value': 'B'}, 'weight': 20}, {'node': {'value': 'C'}, 'weight': 0}]);
  });

  it('Can return the neighbors of a given node that include the weight between that node and each neighbor', () => {
    let neighbors = graph1.getNeighbors(A);
    expect(neighbors[0].weight).toBe(10);
    expect(neighbors[1].weight).toBe(20);
    expect(neighbors[2].weight).toBe(0);
  });

  it('Can return the proper size of the graph, i.e. the number of nodes it contains', () => {
    expect(graph1.size()).toBe(8);
  });

  it('Can properly handle returning a graph that only has one node and one edge', () => {
    let graph = new Graph();
    let node = graph.addNode('A');
    graph.addEdge(node, node);

    expect(graph.getNodes()[0]).toEqual({'value': 'A'});
    expect(graph.getNeighbors(node)).toEqual([{'node': {'value': 'A'}, 'weight': 0}]);
  });

  it('Can properly return null given an empty graph', () => {
    let graph = new Graph();
    expect(graph.getNodes()).toBe(null);
  });
});
