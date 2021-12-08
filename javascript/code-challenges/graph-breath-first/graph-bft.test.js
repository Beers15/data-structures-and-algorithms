const Graph = require('./graph');

describe('Tests the breadth-first traversal method', () => {
  let graph1 = new Graph();
  let A = graph1.addNode('A');
  let B = graph1.addNode('B');
  let C = graph1.addNode('C');
  let D = graph1.addNode('D');
  let E = graph1.addNode('E');
  let F = graph1.addNode('F');
  let G = graph1.addNode('G');
  let H = graph1.addNode('H');

  graph1.addEdge(A, D); graph1.addEdge(A, B); graph1.addEdge(A, C);
  graph1.addEdge(B, E); graph1.addEdge(C, F); graph1.addEdge(D, G);
  graph1.addEdge(E, H);

  it('Can successfully perform a breadth-first traversal', () => {
    let traversalResult = graph1.breadthFirst(A);
    expect(traversalResult).toEqual([{'value': 'A'}, {'value': 'D'}, {'value': 'B'}, {'value': 'C'}, {'value': 'G'}, {'value': 'E'}, {'value': 'F'}, {'value': 'H'}]);
  });

  it('Can successfully perform a breadth-first traversal starting from different nodes on the same graph', () => {
    let traversalResult1 = graph1.breadthFirst(B);
    expect(traversalResult1).toEqual([{'value': 'B'}, {'value': 'E'}, {'value': 'H'}]);

    let traversalResult2 = graph1.breadthFirst(H);
    expect(traversalResult2).toEqual([{'value': 'H'}]);
  });

  it('Can handle traversing and empty graph', () => {
    let graph = new Graph();
    expect(graph.breadthFirst()).toBe(null);
  });

  it('Can handle traversing a cyclic graph', () => {
    let cyclicGraph = new Graph();
    let uno = cyclicGraph.addNode(1);
    let dos = cyclicGraph.addNode(2);
    let tres = cyclicGraph.addNode(3);

    cyclicGraph.addEdge(uno, dos); cyclicGraph.addEdge(dos, tres); cyclicGraph.addEdge(tres, uno);

    let traversalResult = cyclicGraph.breadthFirst(uno);
    expect(traversalResult).toEqual([{'value': 1}, {'value': 2}, {'value': 3}]);
  });

  it('can handle a graph that has nodes with a degree higher than 1, i.e. handle node(s) with 2+ neighbors', () => {
    graph1.addEdge(C, G);
    graph1.addEdge(A, H);
    graph1.addEdge(B, H);
    graph1.addEdge(C, H);
    graph1.addEdge(G, H);

    let traversalResult1 = graph1.breadthFirst(A);
    expect(traversalResult1).toEqual([{'value': 'A'}, {'value': 'D'}, {'value': 'B'}, {'value': 'C'}, {'value': 'H'}, {'value': 'G'}, {'value': 'E'}, {'value': 'F'}]);
    let traversalResult2 = graph1.breadthFirst(C);
    expect(traversalResult2).toEqual([{'value': 'C'}, {'value': 'F'}, {'value': 'G'}, {'value': 'H'}]);
  });
});
