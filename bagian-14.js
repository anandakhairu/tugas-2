//14.1 Implementasi Queue
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}
const queue = new Queue();

queue.enqueue("Request 1");
queue.enqueue("Request 2");
queue.enqueue("Request 3");

console.log(queue.items);

console.log(queue.dequeue());
console.log(queue.items);
