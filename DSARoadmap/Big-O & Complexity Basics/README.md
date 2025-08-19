# Big-O & Complexity Basics

## 1. Why Big-O Matters

Big-O isn't about exact time taken, it's about **how code scales when the input size grows**. We want to be able to say:

- **"This function gets slower linearly as data grows"** → `O(n)`
- **"This function's time stays the same regardless of input"** → `O(1)`

## 2. Common Big-O Notations

Here's the quick reference:

| Notation | Name | Example Scenario |
|----------|------|------------------|
| `O(1)` | Constant | Accessing an array element by index |
| `O(log n)` | Logarithmic | Binary search |
| `O(n)` | Linear | Looping through an array once |
| `O(n log n)` | Linearithmic | Merge sort |
| `O(n²)` | Quadratic | Nested loops over the same array |
| `O(2ⁿ)` | Exponential | Solving Tower of Hanoi |
| `O(n!)` | Factorial | Permutations of a set |

## 3. How to Identify Big-O from Code

### Example 1 — O(1)

```javascript
const getFirst = (arr) => arr[0];
```

**Analysis:** Accessing the first element doesn't depend on array size → **`O(1)`**.

### Example 2 — O(n)

```javascript
const printItems = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
```

**Analysis:** One loop → grows linearly with size → **`O(n)`**.

### Example 3 — O(n²)

```javascript
const printPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};
```

**Analysis:** Two nested loops → **`O(n²)`**.

## 4. Space Complexity

Same idea but for **memory usage**:

- **`O(1)`**: Uses a fixed amount of extra memory
- **`O(n)`**: Extra memory grows with input size (like making a copy of the array)

### Example:

```javascript
const copyArray = (arr) => {
  let newArr = [...arr]; // takes extra space proportional to n
  return newArr;
}; // Space: O(n)
```

## 5. Practice Problems

I want you to look at code and tell me the Big-O.

### Problem 1:

```javascript
function sumAll(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

**Your Answer:** `O(?)`

### Problem 2:

```javascript
function printArrayTwice(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
  for (let j = 0; j < arr.length; j++) console.log(arr[j]);
}
```

**Your Answer:** `O(?)`

### Problem 3:

```javascript
function logTrios(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}
```

**Your Answer:** `O(?)`

---

## Quick Tips

- **Drop constants**: `O(2n)` becomes `O(n)`
- **Drop lower order terms**: `O(n² + n)` becomes `O(n²)`
- **Nested loops multiply**: Two nested loops = `O(n²)`
- **Sequential loops add**: Two separate loops = `O(n + n)` = `O(2n)` = `O(n)`
