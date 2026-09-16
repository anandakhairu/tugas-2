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


const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Pencarian Terakhir:", searchHistory.peek()); // tablet
console.log("Undo Search:", searchHistory.pop()); // tablet dihapus
console.log("Keyword Sekarang:", searchHistory.peek()); // phone