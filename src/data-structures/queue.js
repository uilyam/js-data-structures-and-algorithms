class Queue {
  constructor(...items) {
    this.items = items;
  }

  get size() {
    return this.items.length;
  }

  enqueue(item) {
    this.items.unshift(item);
    return this;
  }

  dequeue() {
    return this.items.pop();
  }
}

module.exports = Queue;