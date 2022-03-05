# Searching Algorithms

* Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.

## [Linear Search](linear-search.js)
* The list or array is traversed sequentially and every element is checked.

## [Binary Search](binary-search.js)
* Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
* The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

## The basic steps to perform Binary Search are:
    * Begin with an interval covering the whole array.
    * If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
    * Otherwise, narrow it to the upper half.
    * Repeatedly check until the value is found or the interval is empty.