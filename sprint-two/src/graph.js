

// Instantiate a new graph
var Graph = function() {

  // graph object
  var graph = Object.create(Graph.prototype);
  this.nodeHolder = {};
  this.size = 0;

  // connection object
  //index number ++
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // debugger;
  // make the proper node structure with Nodes class
  var node = Nodes(value);

  // put the node in the graph object
  this.nodeHolder[node.id] = node;
  // increase size
  this.size++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  // go through all the nodes in the nodeHolder object
    // if one of them contains the value
      // return true
  // otherwise it isn't there and we return false

  for (var key in this.nodeHolder) {
    if (this.nodeHolder[key].value === value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  // var storage to hold node
  var storage = this.nodeHolder[value];
  for (var linkedNode in storage.edges) {
    // delete linkedNode.edges[value];
    // console.log(linkedNode);
    this.removeEdge(value, linkedNode)
  }
  delete this.nodeHolder[value];
  // remove edge from linked nodes to this particular Node
  // remove node from nodeHolder
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if both the fromNode and the toNode have each other's edges in their edge property, return true. Otherwise they are not linked.
  if (this.nodeHolder[fromNode].edges[toNode]
    && this.nodeHolder[toNode].edges[fromNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // get the fromNode
  // get the toNode
  // push in the id of the toNode into the fromNode
  //// this.nodeHolder[fromNode].edges.push(toNode);
  this.nodeHolder[fromNode].edges[toNode] = this.nodeHolder[toNode];
  // push in the id of the fromNode into the toNode
  //// this.nodeHolder[toNode].edges.push(fromNode);
  this.nodeHolder[toNode].edges[fromNode] = this.nodeHolder[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // fromNode = this.nodeHolder[fromNode];
  // toNode = this.nodeHolder[toNode];
  delete this.nodeHolder[fromNode].edges[toNode];
  delete this.nodeHolder[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodeHolder) {
    cb(this.nodeHolder[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Nodes = function (value) {
  var node = {};

  node.value = value; //value
  node.id = value; //ID
  node.edges = {}; //edges

  return node;
};
