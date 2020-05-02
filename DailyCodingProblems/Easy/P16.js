/**
 * This problem was asked by Twitter.
 * You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:
 * record(order_id): adds the order_id to the log
 * get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
 * You should be as efficient with time and space as possible.
*/

function AppLog(N) {
    this.data = [];
    this.current = 0;
    this.size = N;
}

AppLog.prototype.record = function(order_id) {
    this.data[this.current] = order_id;
    this.current = (this.current + 1) % this.size;
}

AppLog.prototype.get_last = function(i) {
    return this.data[(this.current - i + this.size) % this.size];
}

const log = new AppLog(5);

for(let i = 0; i < 9; i++) {
    log.record(`312${i}`);
    console.log(log);
}

for(let i=1; i<=5; i++) {
    console.log(log.get_last(i));
}

