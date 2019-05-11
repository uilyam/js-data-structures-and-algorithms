const assert = require('assert');
const Stack = require('../src/data-structures/stack');

describe('data structure: stack', function() {

  it('should push an item on to the stack.', function() {
    const stack = new Stack();
    assert.equal(stack.size, 0);
    stack.push(1);
    assert.equal(stack.size, 1);
  });

  it('should push an item on to the stack with defaults.', function() {
    const stack = new Stack(1, 2, 3);
    assert.equal(stack.size, 3);
    stack.push(4);
    assert.equal(stack.size, 4);
  });

  it('should remove/pop the last item added', function() {
    const stack = new Stack();
    assert.equal(stack.size, 0);
    stack.push(1);
    assert.equal(stack.size, 1);
    assert.equal(stack.pop(), 1);
  });

  it('should remove/pop the last item added with defaults', function() {
    const stack = new Stack(1, 2, 3);
    assert.equal(stack.size, 3);
    stack.push(4);
    assert.equal(stack.size, 4);
    assert.equal(stack.pop(), 4);
  });
});