const assert = require('assert');
const Queue = require('../src/data-structures/queue');

describe('data structure: Queue', function() {

  it('should enqueue an item.', function() {
    const queue = new Queue();
    assert.equal(queue.size, 0);
    queue.enqueue(1);
    assert.equal(queue.size, 1);
  });

  it('should enqueue an item with defaults.', function() {
    const queue = new Queue(1, 2, 3);
    assert.equal(queue.size, 3);
    queue.enqueue(4);
    assert.equal(queue.size, 4);
  });

  it('should dequeue an item.', function() {
    const queue = new Queue();
    assert.equal(queue.size, 0);
    queue.enqueue(1);
    assert.equal(queue.size, 1);
    assert.equal(queue.dequeue(), 1);
  });

  it('should dequeue an item with defaults.', function() {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    assert.equal(queue.size, 3);

    queue.enqueue(4);
    assert.equal(queue.size, 4);
    assert.equal(queue.dequeue(), 1);
  });
});