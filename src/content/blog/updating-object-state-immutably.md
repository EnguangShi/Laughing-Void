---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime:
title: "[React] 19. Best Practice: Updating Object State Immutably"
featured: false
draft: false
tags:
  - React
description: "The best practices for immutably updating object state in React."
---

This section explains the best practices for updating object state immutably in React, ensuring that objects and arrays are properly copied to prevent direct mutation.

## 目录

## Best Practice: Updating Object State Immutably

### 1. Why You Shouldn't Mutate Objects and Arrays Directly

In JavaScript, objects and arrays are reference values, meaning they point to a specific memory location. If you modify them directly, it affects all other references to that object or array.

To avoid this, you should always create a copy of the object or array before modifying it.

### 2. Example: Copying and Updating an Object

To immutably update an object, use the spread operator (`...`) to create a deep copy (different memory location) of the object before modifying it:

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

This ensures that both the outer array and the inner arrays are copied, preventing accidental mutations of the original data.

### 5. Conclusion

Always use the spread operator or other techniques to create copies of objects and arrays before updating them. This ensures immutability, prevents bugs, and helps React correctly detect changes in state for re-rendering.
