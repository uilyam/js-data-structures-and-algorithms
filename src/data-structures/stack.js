class Stack {
  constructor(...items) {
    this.items = items;
  }

  get size() {
    return this.items.length;
  }

  push(item) {
    this.items.unshift(item);
    return this;
  }

  pop() {
    return this.items.shift();
  }
}

module.exports = Stack;