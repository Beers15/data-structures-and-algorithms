# Hash Map

This class creates a Hash Map, a data structure that associates keys with values by hashing them. Key value pairs are stored in a bucket at the hashed index. This implementation uses a linked list as part of each bucket to handle collisions.

## Challenge

Create a class that implements a hash Map and contains the following methods:

* add

* get

* contains

* hash

This class should be able to do all of the following:

* Adding a key/value to your hashMap results in the value being in the data structure
* Retrieving based on a key returns the value stored
* Successfully returns null for a key that does not exist in the hashMap
* Successfully handle a collision within the hashMap
* Successfully retrieve a value from a bucket within the hashMap that has a collision
* Successfully hash a key to an in-range value

----------------

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
* While creating the class and implementing each of the required methods, I took on one bullet point at a time from the list above. As I completed each requirement, I checked for accuracy by adding a unit test to my test suite.

* To handle collisions I used a linked list which was added to each bucket once it contained a value. When a collision occurred I had to store both the key and the value in the list, so that retrieval of any value that mapped to the same index would be possible given a specific key.

* Inserting into the Map takes O(1) time. Getting a value from the Map takes O(n) time where n is the number of elements in the linked list at that bucket. Checking if a value is contained within the Map takes O(n * m) time where n is the size of the map and m is the average size of the linked list at each bucket or 1 if no list has been initialized at an index yet (the average amount of collisions + 1). All these actions have a space complexity of O(1).

----------------

## API
<!-- Description of each method publicly available to your Linked List -->
HashMap: Takes a single argument which represents the size of the underlying array

add

    Arguments: key, value
    Returns: nothing
    This method should hash the key, and add the key and value pair to the Map, handling collisions as needed.

get

    Arguments: key
    Returns: Value associated with that key in the Map

contains

    Arguments: key
    Returns: Boolean, indicating if the key exists in the Map already.

hash

    Arguments: key
    Returns: Index in the collection for that key
