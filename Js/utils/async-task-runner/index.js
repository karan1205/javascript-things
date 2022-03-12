/**
 * Task Runner
 */

class TaskRunner {
    constructor(allowedTaskCount) {
        this.allowedTaskCount = allowedTaskCount;
        this.currentTaskCount = 0;
        this.waitList = [];
    }

    push(task) {
        this.waitList.push(task);
        this.runTask();
    }

    runTask() {
        if(this.currentTaskCount < this.allowedTaskCount) {
            if(this.waitList.length) {
                const task = this.waitList.shift();
                task().then(res => {
                    console.log(task.name, res);
                    this.currentTaskCount--;
                    this.runTask();
                });
                this.currentTaskCount++;
                console.log(`Running - ${task.name}`);
            }
        }
    }
}

// const runner = new TaskRunner(3);
// runner.push(task1);
// runner.push(task2);
// runner.push(task3);
// runner.push(task4);
// runner.push(task5);
// runner.push(task6);
//
// function task1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 1 Completed');
//         }, 100);
//     })
// }
//
// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 2 Completed');
//         }, 200);
//     })
// }
//
// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 3 Completed');
//         }, 300);
//     })
// }
//
// function task4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 4 Completed');
//         }, 400);
//     })
// }
//
// function task5() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 5 Completed');
//         }, 500);
//     })
// }
//
// function task6() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Task 6 Completed');
//         }, 600);
//     })
// }