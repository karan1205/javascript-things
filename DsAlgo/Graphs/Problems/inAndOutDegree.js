import {Graph} from '../index';

function findInAndOutDegree(graph) {
    const degreeMap = {};
    Object.keys(graph).forEach(key => {
        if(!degreeMap[key]) {
            degreeMap[key] = { in: 0, out: 0 };
        }
        degreeMap[key].out = graph[key].length;

        graph[key].forEach(item => {
            if(!degreeMap[item]) {
                degreeMap[item] = { in: 0, out: 0 };
            }
            degreeMap[item].in += 1;
        });
    });
    return degreeMap;
}

const g = new Graph(true);

g.addVertex("0");
g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addVertex("5");
g.addVertex("6");

g.addEdge("0", "1");
g.addEdge("0", "2");
g.addEdge("1", "3");
g.addEdge("2", "0");
g.addEdge("2", "6");
g.addEdge("2", "5");
g.addEdge("3", "1");
g.addEdge("3", "4");
g.addEdge("4", "2");
g.addEdge("4", "3");
g.addEdge("5", "4");
g.addEdge("5", "6");
g.addEdge("6", "5");

const degrees = findInAndOutDegree(g.adjacencyList);
console.log(degrees);