export class Graph {
    constructor(directed = false) {
        this.adjacencyList = {};
        this.directed = directed;
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) {
           return 'Already Exists';
        }
        this.adjacencyList[vertex] = [];
        return this.adjacencyList;
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            return `${vertex1} not exists`;
        }
        if(!this.adjacencyList[vertex2]) {
            return `${vertex2} not exists`;
        }
        this.adjacencyList[vertex1].push(vertex2);
        if(!this.directed) {
            this.adjacencyList[vertex2].push(vertex1);
        }
        return this.adjacencyList;
    }

    removeEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return 'invalid vertex';
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        if(!this.directed) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(v => v !== vertex1);
        }
        return this.adjacencyList;
    }

    removeVertex(vertex) {
        const edges = this.adjacencyList[vertex]
        edges.forEach(e => {
            this.removeEdge(vertex, e);
        });
        delete this.adjacencyList[vertex];
        return this.adjacencyList;
    }

    dfsRecursive(vertex) {
        const visited = {};
        const result = [];
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
        })(vertex);
        return result;
    }

    dfsIterative(vertex) {
        if(!vertex) {
            return null;
        }
        const stack = [vertex];
        const visited = {};
        const result = [];
        while(stack.length) {
            const current = stack.pop();
            if(!visited[current]) {
                visited[current] = true;
                result.push(current);
                stack.push(...this.adjacencyList[current]);
            }
        }
        return result;
    }

    bfs(vertex) {
        if(!vertex) {
            return null;
        }
        const queue = [vertex];
        const visited = {};
        const result = [];
        while(queue.length) {
            const current = queue.shift();
            if(!visited[current]) {
                visited[current] = true;
                result.push(current);
                queue.push(...this.adjacencyList[current]);
            }            
        }
        return result;
    }
}

const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
