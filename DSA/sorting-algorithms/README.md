# Sorting Algorithms

* A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements.
* The comparison operator is used to decide the new order of element in the respective data structure.

## [Merge Sort](merge-sort.js)
* It's a combination of two things - merging and sorting!
* Exploits the fact that arrays of 0 or 1 element are always sorted
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
* Time Complexity - O(n log n)
* Space Complexity - O(n)

    * In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
    * Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
    * This function should run in O(n+m) time and O(n+m) space and sho uld not modify the parameters passed to it.
    * Break up the array into halves until you have arrays that are empty or have one element.
    * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array. (using helper merge function)
    * Once the array has been merged back together, return the merged (and sorted!) array.

## [Quick Sort](quick-sort.js)
* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
* Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
* Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
* Time Complexity - O(n log n)
* Space Complexity - O(log n)

    * In order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
    * Given an array, this helper function should designate an element as the pivot.
    * It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
    * The order of elements on either side of the pivot doesn't matter!
    * The helper should do this in place, that is, it should not create a new array.
    * When complete, the helper should return the index of the pivot.
