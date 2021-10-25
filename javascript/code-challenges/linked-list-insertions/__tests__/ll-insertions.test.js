const LinkedList = require('../Linked-list');

describe('Test the methods added for this code challenge', () => {
  it('The list can properly delete the first occurrence of a value', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);

    list.delete(3);

    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 4 } -> { 5 } -> NULL');

    let error = null;
    try {
      list.delete(6);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: Value does not exist');
  });

  it('The list can properly insert a value after another specified value', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);

    list.insertAfter(2, 9);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 9 } -> { 3 } -> NULL');

    list.insertAfter(3, 14);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 9 } -> { 3 } -> { 14 } -> NULL');

    let error = null;
    let list2 = new LinkedList();
    try {
      list2.insertAfter(22, 11);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: List is Empty, no value to insert after');

    error = null;
    try {
      list.insertAfter(1234, 8);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: Value does not exist');
  });

  it('The list can properly insert a value before another specified value', () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);

    list.insertBefore(2, 9);
    expect(list.toString()).toBe('{ 1 } -> { 9 } -> { 2 } -> { 3 } -> NULL');

    let list2 = new LinkedList();
    list2.insert(2);
    list2.insertBefore(2, 1);
    expect(list2.toString()).toBe('{ 1 } -> { 2 } -> NULL');

    let error = null;
    let list3 = new LinkedList();
    try {
      list3.insertBefore(22, 11);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: List is Empty, no value to insert before');

    error = null;
    let list4 = new LinkedList();
    list4.insert(1);
    try {
      list4.insertBefore(2, 11);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: Value does not exist');
  });

  it('The list can properly insert a value at the end of the list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.insert(0);

    expect(list.toString()).toBe('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> NULL');

    let list2 = new LinkedList();
    list2.append(4);
    list2.append(5);
    list2.append(6);

    expect(list2.toString()).toBe('{ 4 } -> { 5 } -> { 6 } -> NULL');
  });
});
