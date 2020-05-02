<a href="https://raw.githubusercontent.com/karan1205/javascript-things/master/javascript-things.jpg"><img src="javascript-things.jpg" title="javascript-things" alt="javascript-things"></a>

# JavaScript Things

This repository contains implementaions of data structures and algorithms, design-patterns, built-in javascript objects and solutions to the problems from various platforms like LeetCode, Daily Coding Problem and more.

---

## Table of Contents

- [Data Structures and Algorithms](#data-structures-and-algorithms)
- [Built-in JavaScript Objects and concepts](#built-in-javascript-objects)
- [Design Patterns](#design-patterns)
- [Leet Code](#leet-code)
- [Daily Coding Problems](#daily-coding-problem)
- [Misc](#misc)

## [Data Structures and Algorithms](./DsAlgo)

- [Recursion](./DsAlgo/Recursion/)
- [Linked Lists](./DsAlgo/LinkedLists)
    - [Singly Linked List]('./DsAlgo/LinkedLists/SinglyLinkedList.js')
    - [Doubly Linked List]('./DsAlgo/LinkedLists/DoublyLinkedList.js')
    - [Problems]('./DsAlgo/LinkedLists/Problems')
- [Stacks](./DsAlgo/Stacks)
    - [Using Array](./DsAlgo/Stacks/StackArray.js)
    - [Using Linked List](./DsAlgo/Stacks/LinkedList.js)
    - [Problems]('./DsAlgo/Stacks/Problems')
- [Trees](./DsAlgo/Trees)
    - [Binary Search Tree](./DsAlgo/Trees/BinarySearchTree.js)
    - [Problems]('./DsAlgo/Trees/Problems')

## [Built-in JavaScript Objects and Utils](./Js)

- [Standard built-in objects](./Js/core)
    -  [Array](./Js/core/Array)
        - [map](./Js/core/Array/map.js)
        - [filter](./Js/core/Array/filter.js)
        - [reduce](./Js/core/Array/reduce.js)
    -  [Function](./Js/core/Function)
        - [call](./Js/core/Function/call.js)
        - [apply](./Js/core/Function/apply.js)
        - [bind](./Js/core/Function/bind.js)
    -  [Promise](./Js/core/Promise/promise.js)
    -  [Object](./Js/core/Object)
        - [create](./Js/core/Array/Object/object.create.js)

- [Utils](./Js/utils)
    -  [Currying](./Js/core/utils/curry.js)
    -  [Debounce](./Js/core/utils/debounce.js)
    -  [Throttle](./Js/core/utils/throttle.js)
    -  [Deep Clone Object](./Js/core/utils/deepCloneObject.js)
    -  [getElementsByClassName](./Js/core/utils/getElementsByClassName.js)
    -  [iterator](./Js/core/utils/iterator)
    -  [Prototypal Inheritance](./Js/core/utils/prototypalInheritance.js)


## [Design Patterns](./DesignPatterns)

- [Constructor Pattern](./DesignPatterns/ContructorPattern/index.js)
- [Module Pattern](./DesignPatterns/ModulePattern/index.js)
- [Singleton Pattern](./DesignPatterns/SingletonPattern/index.js)
- [Observer Pattern](./DesignPatterns/ObserverPattern/index.js)
- [PublishSubscribe Pattern](./DesignPatterns/PublishSubscribePattern/index.js)


## [Leet Code](./LeetCode)

## [Daily Coding Problems](./DailyCodingProblems)

- [Easy](./DailyCodingProblems/Easy)
    
    [Problem 1](./DailyCodingProblems/Easy/P1.js)
    
    This problem was recently asked by Google.
    
    Given a list of numbers and a number k, return hether any two numbers from the list add up to k.
    
    For example, given [10, 15, 3, 7] and k of 17, eturn true since 10 + 7 is 17.
    
    Bonus: Can you do this in one pass?

    ___
    
    [Problem 8](./DailyCodingProblems/Easy/P8.js)
    
    This problem was asked by Google.
    
    A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
    
    Given the root to a binary tree, count the number of unival subtrees.
    
    For example, the following tree has 5 unival subtrees:
    ```
          0
         / \
        1   0
           / \
          1   0
         / \
        1   1
    ```
    ___

    [Problem 16](./DailyCodingProblems/Easy/P16.js)
    
    This problem was asked by Twitter.
    
    You run an e-commerce website and want to record the last `N order` ids in a log. Implement a data structure to accomplish this, with the following API:
    
    record(order_id): adds the order_id to the log

    get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
    
    You should be as efficient with time and space as possible.
    
    ___

    [Problem 20](./DailyCodingProblems/Easy/P20.js)
    This problem was asked by Google.
    
    Given two singly linked lists that intersect at some point, find the intersecting node. The lists are     non-cyclical.
    
    For example, given `A = 3 -> 7 -> 8 -> 10` and `B = 99 -> 1 -> 8 -> 10`, return the node with value `8`.
    
    In this example, assume nodes with the same value are the exact same node objects.
    
    Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

    ___

    



