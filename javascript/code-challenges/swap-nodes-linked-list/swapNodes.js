function swapNodes(head, k) {
  let curr = head;
  let count = 0;
  while(curr) {
    curr = curr.next;
    count++;
  }

  let first = locateNode(head, k - 1);
  let second = locateNode(head, count - k);

  let temp = first.val;
  first.val = second.val;
  second.val = temp;

  return head;
}

const locateNode = (head, stopIdx) => {
  let curr = head;
  let counter = 0;

  while (curr) {
    if(counter === stopIdx) {
      return curr;
    }
    counter++;
    curr = curr.next;
  }
  return curr;
};

module.exports = swapNodes;
