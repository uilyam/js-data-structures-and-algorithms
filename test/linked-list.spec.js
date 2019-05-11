const assert = require('assert');
const LinkedList = require('../src/data-structures/linked-list');

describe('data structure: Linked List', function() {

  it('should add an item to the list.', function() {
    const list = new LinkedList();

    assert.equal(list.size, 0);
    list.add(1);
    assert.equal(list.size, 1);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev, undefined);
  });

  it('should add multiple items to the list.', function() {
    const list = new LinkedList();

    list.add(1);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev, undefined);
    assert.equal(list.tail, undefined);

    list.add(2);
    assert.equal(list.head.value, 2);
    assert.equal(list.head.next, undefined);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.prev, undefined);
    assert.equal(list.tail.next.value, 2);

    list.add(3);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.head.next, undefined);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.prev, undefined);
    assert.equal(list.tail.next.value, 2);
  });

  it('should find an item.', function() {
    const list = new LinkedList().add(1);

    const node = list.find(1);
    assert.equal(node.value, 1);
    assert.equal(node.next, undefined);
    assert.equal(node.prev, undefined);
  });


  it('should find an item amongst multiple items.', function() {
    const list = new LinkedList().add(1).add(2).add(3);

    const tail = list.find(1);
    assert.equal(tail.value, 1);
    assert.equal(tail.next.value, 2);
    assert.equal(tail.prev, undefined);

    const head = list.find(3);
    assert.equal(head.value, 3);
    assert.equal(head.next, undefined);
    assert.equal(head.prev.value, 2);
  });

  it('should remove an item.', function() {
    const list = new LinkedList().add(1);

    const node = list.remove(1);
    assert.equal(node.value, 1);
    assert.equal(list.head, undefined);
    assert.equal(list.tail, undefined);
  });

  it('should head item from a list with two items.', function() {
    const list = new LinkedList().add(1).add(2);

    const node = list.remove(2);
    assert.equal(node.value, 2);
    assert.equal(list.size, 1);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev, undefined);
  });

  it('should tail item from a list with two items.', function() {
    const list = new LinkedList().add(1).add(2);

    const node = list.remove(1);
    assert.equal(node.value, 1);
    assert.equal(list.size, 1);
    assert.equal(list.head.value, 2);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev, undefined);
  });

  it('should remove a head item amongst multiple items.', function() {
    const list = new LinkedList().add(1).add(2).add(3);

    const node = list.remove(3);
    assert.equal(node.value, 3);
    assert.equal(list.size, 2);
    assert.equal(list.head.value, 2);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 2);
    assert.equal(list.tail.prev, undefined);
  });

  it('should remove a tail item amongst multiple items.', function() {
    const list = new LinkedList().add(1).add(2).add(3);

    const node = list.remove(1);
    assert.equal(node.value, 1);
    assert.equal(list.size, 2);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev.value, 2);
    assert.equal(list.tail.value, 2);
    assert.equal(list.tail.next.value, 3);
    assert.equal(list.tail.prev, undefined);
  });

  it('should remove a link item amongst multiple items.', function() {
    const list = new LinkedList().add(1).add(2).add(3);

    const node = list.remove(2);
    assert.equal(node.value, 2);
    assert.equal(list.size, 2);
    assert.equal(list.head.value, 3);
    assert.equal(list.head.next, undefined);
    assert.equal(list.head.prev.value, 1);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next.value, 3);
    assert.equal(list.tail.prev, undefined);
  });
});