# 'FizzBuzz' a K-Nary Tree

## Covert all the node values in a K-Nary Tree to their corresponding Fizz Buzz values

## Challenge

Add a fizzBuzzTree method that take in a K-Nary tree and coverts it into a fizzBuzz Tree

Trees that have been 'FizzBuzzed' have "Fizz" in place of any value divisible by 3, "Buzz" in place of any value divisible by 5, and "FizzBuzz" in place of any value divisible by 3 and 5. Any other values will be converted to their string equivalents.

Tests were written to prove the following functionality:

    If the value is divisible by 3, replace the value with “Fizz”
    If the value is divisible by 5, replace the value with “Buzz”
    If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
    If the value is not divisible by 3 or 5, simply turn the number into a String.
    If an empty tree is passed to the method, it will exit gracefully without changing anything.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
My approach for this one was to find a way to traverse the KNary tree while hitting each node/child node. I chose a use a stack to do an iterative depth first traversal through the tree. I used a helper function to 'FizzBuzz' the existing values.

I followed my created visuals in order to more easily turn ideas into code.

The solution took O(N) time. The space complexity was O(1) since the original tree was modified in-place.

-----

## API

Binary-tree

fizzBuzzTree()

  Arguments: a K-Nary tree (i. e. a tree where nodes can have more than 2 children)
  Returns: Nothing, the original tree is modified in place
  Traverses over the K-nary tree in and converts each value into its corresponding fizzBuzz value, essentially creating a new tree

### Whiteboard Visual

![Solution approach diagram](./knaryFizzBuzzTree.png)

### Link To Code

Code can be found ![here](./fizzBuzzTree.js)
