class Node {

  constructor({ value, next, prev }) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  isHead() {
    return this.next === undefined;
  }

  isTail() {
    return !this.isHead() && this.prev === undefined;
  }

  isLink() {
    return !this.isHead() && !this.isTail();
  }

  hasNext() {
    return !this.isTail();
  }
}

class LinkedList {

  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  get size() {
    let size = 0;
    this.iterate(this.head, () => {
      size += 1;
    });
    return size;
  }

  add(value) {
    const previous = this.head;
    this.head = new Node({ value, prev: previous, });
  
    if (previous) {
      previous.next = this.head;
    }

    const isFirstTimeAddingSecondNode = !this.tail && this.head.prev;
    if (isFirstTimeAddingSecondNode) {
      this.tail = this.head.prev;
      this.tail.next = this.head;
    }

    return this;
  }

  remove(value) {
    const node = this.find(value);
    if (!node) {
      return undefined;
    }
    if (node.isHead() && !node.prev) {
      this.head = undefined;
    } else if (node.isHead()) {
      this.head = this.head.prev;
      this.head.next = undefined;
    } else if (node.isTail()) {
      this.tail = this.tail.next;
      this.tail.prev = undefined;
    } else {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
    return node;
  }

  find(value) {
    if (this.head.value === value) {
      return this.head;
    }
    let node = this.head.prev;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.prev;
    }
    return null;
  }

  iterate(start, onNode) {
    let node = start;
    while (node) {
      if (onNode(node)) {
        return node;
      }
      node = this.next(node);
    }
  }

  next(node) {
    return node.prev;
  }

  toString() {
    let string = '';
    this.iterate(this.head, (node) => {
      if (this._isHead(node)) {
        string += '(HEAD): ';
      } else if (this._isTail(node)) {
        string += '(TAIL): ';
      } else {
        string += '(LINK): ';
      }
      string += `Node with value: ${node.value} Next Node Value: ${node.next && node.next.value}, Previous Node Value: ${node.prev && node.prev.value}\n`;
    });
    return string;
  }
}

module.exports = LinkedList;