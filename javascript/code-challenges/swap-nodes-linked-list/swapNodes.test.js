const swapNodes = require('./swapNodes');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

describe('Tests the swapNodes function', () => {
  it('Should successfully swap 2 arbitrary nodes in a list', () => {
    let list = new ListNode(7, new ListNode(9, new ListNode(6, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(3, new ListNode(0, new ListNode(9, new ListNode(5, null))))))))));
    let res = swapNodes(list, 5);

    expect(res.next.next.next.next.val).toBe(8);
    expect(res.next.next.next.next.next.val).toBe(7);
  });

  it('Should successfully handle a list where k nodes from the end and k nodes from the start is the same node', () => {
    let list = new ListNode(1, new ListNode(2, new ListNode(3, null)));

    let res = swapNodes(list, 2);

    expect(res.next.val).toBe(2);
  });

  it('Should successfully handle a value of k that is the size of the list', () => {
    let list = new ListNode(1, new ListNode(2, new ListNode(3, null)));

    let res = swapNodes(list, 3);
    expect(res.val).toBe(3);
    expect(res.next.next.val).toBe(1);
  });

  it('Should successfully handle a list of size 1, k = 1', () => {
    let list = new ListNode(1, null);

    let res = swapNodes(list, 1);
    expect(res.val).toBe(1);
  });
});
