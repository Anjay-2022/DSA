class Graph {
    constructor() {
      this.data = {};
    }
    addVertex(vertex) {
      if (!this.data[vertex]) {
        this.data[vertex] = [];
      }
    }

    addEdge(v1, v2) {
      if (!this.data[v1]) {
        this.addVertex(v1);
      }
      if (!this.data[v2]) {
        this.addVertex(v2);
      }

      this.data[v1].push(v2);
      this.data[v2].push(v1);
    }
    removeEdge(v1, v2) {
      // console.warn("remove",this.data[v1])
      this.data[v1] = this.data[v1].filter((item) => {
        return item != v2;
      });

      this.data[v2] = this.data[v2].filter((item) => {
        return item != v1;
      });
    }

    removeVertex(vertex){
      if(!this.data[vertex]){
        return ;
      }
      for(let item of this.data[vertex])
      {
        this.removeEdge(vertex,item)
      }

      delete this.data[vertex];
    }
   
  }

  const graph1 = new Graph();
  graph1.addVertex("A");
  console.warn(graph1.data);
  graph1.addVertex("B");
  console.warn(graph1.data);
  graph1.addVertex("C");
  console.warn(graph1.data);
  graph1.addVertex("D");
  console.warn(graph1.data);

  console.warn("Add edge");
  graph1.addEdge("A", "B"); 
   console.warn(graph1.data);
  graph1.addEdge("A", "C");
  console.warn(graph1.data);
  graph1.addEdge("B", "C");
  console.warn(graph1.data);
  graph1.addEdge("B", "D");
  console.warn(graph1.data);

  console.log("remove edge")
   graph1.removeEdge("A","B");
  // graph1.removeEdge("B","D");
  console.warn(graph1.data);

  // graph1.removeVertex('A')
  console.warn("removing vertex");
  graph1.removeVertex('C')
  console.warn(graph1.data);