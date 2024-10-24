---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime: 2024-10-24T04:19:31Z
title: "[React] 19. Best Practice: Updating Object State Immutably"
featured: false
draft: false
tags:
  - React
description: "The best practices for immutably updating object state in React, with examples on why immutability is important."
---

This section explains the best practices for updating object state immutably in React, ensuring that objects and arrays are properly copied to prevent direct mutation.

## 目录

## Best Practice: Updating Object State Immutably

### 1. Why You Shouldn't Mutate Objects and Arrays Directly

In JavaScript, objects and arrays are reference values, meaning they point to a specific memory location. If you modify them directly, it affects all other references to that object or array.

To avoid this, you should always create a copy of the object or array before modifying it.

### 2. Example: Copying and Updating an Object

To immutably update an object, use the spread operator (`...`) to create a shallow copy of the object before modifying it:

```jsx
// Correct approach: Create a new object with the spread operator
const updatedUser = { ...user }; // This creates a new object in a different memory location
updatedUser.name = "Samuel";

// Incorrect approach: This directly modifies the original object
const updatedUser = user;
updatedUser.name = "Samuel"; // Both updatedUser and user now refer to the same memory location
```

### 3. Example: Copying and Updating an Array

Similarly, you can use the spread operator to copy arrays and update them immutably:

```jsx
// Correct approach: Create a new array with the spread operator
const updatedUser = [...user];
updatedUser[0] = "Samuel"; // This updates only the new array, not the original one
```

### 4. Deep Copying a 2-D Array

For nested arrays (such as 2D arrays), a shallow copy is not enough. You need to create a "deep copy" to ensure that both layers of the array are copied correctly:

```jsx
const updatedBoard = [
  // Copy the outer array
  ...prevGameBoard.map(
    // Copy each inner array
    innerArray => [...innerArray]
  ),
];
```

### 5. Example of Why Immutability is Important

Let’s look at an example where immutability plays a crucial role. In this case, the `gameBoard` is updated based on `gameTurns`. If the game is over and we set `gameTurns` to empty, we expect the `gameBoard` to also reset. However, without immutability, this doesn’t happen:

```jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; // Mutating the initial game board directly
  }
}
```

### 6. Why This Fails

The issue is that we are mutating the `initialGameBoard` directly. When `gameTurns` is set to an empty array, the loop doesn’t run, and the `gameBoard` still holds the last state before the game ended. The mutation persists because `initialGameBoard` was not deep copied.

### 7. The Solution: Deep Copying the Game Board

To solve this, we need to deep copy the `gameBoard` every time `App()` runs, ensuring that a fresh board is created when the game restarts:

```jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  // Deep copy the game board
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; // Updating a deep copied game board
  }
}
```

By using deep copying, a new empty `gameBoard` will be created when the game restarts, preventing the mutation issue.

### 8. Conclusion

Always use the spread operator or other techniques to create copies of objects and arrays before updating them. This ensures immutability, prevents bugs, and helps React correctly detect changes in state for re-rendering.
