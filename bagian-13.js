//13.1 Implementasi Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push("Laptop");
stack.push("Phone");
stack.push("Tablet");

console.log(stack.items);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.items);

//13.2 Search History
const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log(searchHistory.items);
const previousSearch = searchHistory.pop();

console.log("Kembali ke pencarian:", previousSearch);
