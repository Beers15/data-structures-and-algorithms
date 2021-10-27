const LinkedList = require('./Linked-list');

describe('Test the method added for this code challenge', () => {
  it('Should zip two lists of even size', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');

    list1.zipLists(list1, list2);

    expect(list1.toString()).toBe('{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> NULL');

  });

  it('Should zip two lists of uneven size', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    list1.append(4);
    list1.append(5);
    let list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');

    list1.zipLists(list1, list2);

    expect(list1.toString()).toBe('{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> { 4 } -> { 5 } -> NULL');

    let list3 = new LinkedList();
    list3.append(1);
    list3.append(2);
    list3.append(3);
    let list4 = new LinkedList();
    list4.append('a');
    list4.append('b');
    list4.append('c');
    list4.append('d');
    list4.append('e');

    list3.zipLists(list3, list4);

    expect(list3.toString()).toBe('{ 1 } -> { a } -> { 2 } -> { b } -> { 3 } -> { c } -> { d } -> { e } -> NULL');
  });
  it('Should be able to handle a single empty list', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LinkedList();

    list1.zipLists(list1, list2);

    expect(list1.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');


    let list3 = new LinkedList();
    let list4 = new LinkedList();
    list4.append(1);
    list4.append(2);
    list4.append(3);

    list3.zipLists(list3, list4);

    expect(list3.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
  it('Should be able to handle 2 empty lists', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.zipLists(list1, list2);

    expect(list1.toString()).toBe('NULL');
  });
});
