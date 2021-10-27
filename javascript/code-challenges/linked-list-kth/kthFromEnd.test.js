const LinkedList = require('./Linked-list');

describe('Test the method added for this code challenge', () => {
  it('Should get the value k form the end with a “Happy Path”, i.e. k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    expect(list.kthFromEnd(2)).toBe(3);
    expect(list.kthFromEnd(0)).toBe(2);
  });

  it('Should thrown an error if k is greater than the length of the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    let error = null;
    try {
      list.kthFromEnd(4);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: k is to large for this list');
  });

  it('Should get the value k places from the end of the list when k = length of the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    //list is length 4, but counting starts at 0 so k=3 from end goes 4=length of list backwards
    expect(list.kthFromEnd(3)).toBe(1);
  });

  it('Should thrown an error if k is negative', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    let error = null;
    try {
      list.kthFromEnd(-1);
    } catch(err) {
      error = err;
    }
    expect(error.toString()).toBe('Error: k must be positive');
  });

  it('Should get the value k from the end of list with a list of size 1 and k = 0', () => {
    let list = new LinkedList();
    list.append(1);

    expect(list.kthFromEnd(0)).toBe(1);
  });
});
