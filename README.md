<a href="https://raw.githubusercontent.com/karan1205/javascript-things/master/javascript-things.jpg"><img src="javascript-things.jpg" title="javascript-things" alt="javascript-things"></a>

# JavaScript Things

This repository contains implementaions of data structures and algorithms, design-patterns, built-in javascript objects and solutions to the problems from various platforms like LeetCode, Daily Coding Problem and more.

---

## Table of Contents

- [Data Structures and Algorithms](#data-structures-and-algorithms)
- [Built-in JavaScript Objects and Utils](#built-in-javascript-objects-and-Utils)
- [Design Patterns](#design-patterns)
- [Leet Code](#leet-code)
    - [May Leet Coding Challenge](#may-leet-coding-challenge)
- [Daily Coding Problem](#daily-coding-problem)
    - [Easy](#easy)
    - [Medium](#medium)
    - [Hard](#hard)
- [Misc](#misc)

## [Data Structures and Algorithms](./DSA)

- [Recursion](DSA/Recursion/)
- [Linked Lists](DSA/LinkedLists)
    - [Singly Linked List](DSA/LinkedLists/singly-linked-list.function.js)
    - [Doubly Linked List](DSA/LinkedLists/doubly-linked-list.function.js)
    - [Problems](DSA/LinkedLists/Problems)
- [Stacks](DSA/Stacks)
    - [Using Array](DSA/Stacks/StackArray.js)
    - [Using Linked List](DSA/Stacks/LinkedList.js)
    - [Problems](DSA/Stacks/Problems)
- [Trees](DSA/Trees)
    - [Binary Search Tree](DSA/Trees/BinarySearchTree.js)
    - [Problems](DSA/Trees/Problems)
- [Graphs](DSA/Graphs)
    - [Adjacency List](DSA/Graphs/AdjacencyList.js)

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
        - [create](./Js/core/Object/object.create.js)

- [Utils](./Js/utils)
    -  [Currying](./Js/utils/curry.js)
    -  [Debounce](./Js/utils/debounce.js)
    -  [Throttle](./Js/utils/throttle.js)
    -  [Deep Clone Object](./Js/utils/deepCloneObject.js)
    -  [getElementsByClassName](./Js/utils/getElementsByClassName.js)
    -  [iterator](./Js/utils/iterator)
    -  [Prototypal Inheritance](./Js/utils/prototypalInheritance.js)


## [Design Patterns](./DesignPatterns)

- [Constructor Pattern](./DesignPatterns/ContructorPattern/index.js)
- [Module Pattern](./DesignPatterns/ModulePattern/index.js)
- [Singleton Pattern](./DesignPatterns/SingletonPattern/index.js)
- [Observer Pattern](./DesignPatterns/ObserverPattern/index.js)
- [PublishSubscribe Pattern](./DesignPatterns/PublishSubscribePattern/index.js)


## [Leet Code](./LeetCode)

- ### [May Leet Coding Challenge](./LeetCode/MayLeetCodingChallenge)
    
    - #### Day 1 - [First Bad Version](./LeetCode/MayLeetCodingChallenge/FirstBadVersion.js)

        You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

        Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

        You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

        Example:

        ```
        Given n = 5, and version = 4 is the first bad version.

        call isBadVersion(3) -> false
        call isBadVersion(5) -> true
        call isBadVersion(4) -> true

        Then 4 is the first bad version. 
        ```
        ___

    - #### Day 2 - [Jewels and Stones](./LeetCode/MayLeetCodingChallenge/JewelsAndStones.js)

        You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

        The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

        Example 1:
        ```
        Input: J = "aA", S = "aAAbbbb"
        Output: 3
        ```
        Example 2:
        ```
        Input: J = "z", S = "ZZ"
        Output: 0
        Note:
        ```
        - `S` and `J` will consist of letters and have length at most 50.
        - The characters in `J` are distinct.

        ___

## [Daily Coding Problem](./DailyCodingProblem)

- ### [Easy](./DailyCodingProblem/Easy)
    
    [Problem 1](./DailyCodingProblem/Easy/P1.js)
    
    This problem was recently asked by Google.
    
    Given a list of numbers and a number k, return hether any two numbers from the list add up to k.
    
    For example, given [10, 15, 3, 7] and k of 17, eturn true since 10 + 7 is 17.
    
    Bonus: Can you do this in one pass?

    ___
    
    [Problem 8](./DailyCodingProblem/Easy/P8.js)
    
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

    [Problem 16](./DailyCodingProblem/Easy/P16.js)
    
    This problem was asked by Twitter.
    
    You run an e-commerce website and want to record the last `N order` ids in a log. Implement a data structure to accomplish this, with the following API:
    
    record(order_id): adds the order_id to the log

    get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
    
    You should be as efficient with time and space as possible.
    
    ___

    [Problem 20](./DailyCodingProblem/Easy/P20.js)
    This problem was asked by Google.
    
    Given two singly linked lists that intersect at some point, find the intersecting node. The lists are     non-cyclical.
    
    For example, given `A = 3 -> 7 -> 8 -> 10` and `B = 99 -> 1 -> 8 -> 10`, return the node with value `8`.
    
    In this example, assume nodes with the same value are the exact same node objects.
    
    Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

    ___

    



