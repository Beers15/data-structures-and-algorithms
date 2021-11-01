# Stack and Queue

## Implements a Queue class that internally uses 2 Stacks

The class defined here contains 2 stacks to mimic traditional queue behavior. The stacks contained in the queue are built with a singly linked list.

## Challenge

Create a Queue class that internally uses 2 stacks. The Queue must contain the following methods:

enqueue, dequeue

It must also only use push, pop, peek in its implementation

Write tests to prove the following functionality:

    Can successfully enqueue the pseudo queue, empty or not
    Can successfully enqueue multiple values onto the pseudo queue
    Can successfully dequeue the pseudo queue
    Can successfully empty a pseudo queue after multiple dequeues
    Can successfully instantiate an empty pseudo queue
    Will ensure that calling dequeue on empty pseudo queue raises exception
    Can successfully mix enqueues and dequeues without unexpected behaviors occurring

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
While keeping in mind the behavior of stacks, I implemented the 2 required queue methods separately. Enqueue was straightforward, just requiring a single stack. Dequeue needed extra consideration depending on the state of the 2nd stack to keep it efficient. Afterward completing each requirement, I checked for accuracy with unit tests for each.

I followed my created visuals in order to more easily turn ideas into code.

The enqueue took O(1) time. The dequeue method took either O(N) time or O(1) time depending on if stack #2 had values on it.

-----

## API
<!-- Description of each method publicly available to your Linked List -->
PseudoQueue: takes no arguments when instantiated

  enqueue(val):

  Arguments: a value to add to the queue
  Returns: nothing
  This method creates a node from the supplied value and adds it to the back of the queue

  dequeue():

  Arguments: none
  Returns: the value from the node that was removed from the queue
  This method removes the node from the front of the queue or throws an exception if there are no nodes to remove

-----

### Whiteboard Visual

![pseudo queue diagram](./psuedoQueue.png)

### Link To Code

Code can be found ![here](./pseudoQueue.js)
