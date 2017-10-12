

// Instantiate a new graph
var Graph = function() {
  
  // graph object
  var graph = Object.create(Graph.prototype);
  this.nodeHolder = {};
  this.id = 0;
  this.size = 0;
  
  // connection object
  //index number ++
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // debugger;
  // make the proper node structure with Nodes class
  var node = Nodes(value);
  // set the node's id
  node.id = this.id;
  // put the node in the graph object
  this.nodeHolder[this.id] = node;
  // increase id number for the next node
  this.id++;
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
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Nodes = function (value) {
  var node = {};
  
  node.value = value; //value
  node.id = undefined; //ID
  node.edges = []; //edges
  
  return node;
};