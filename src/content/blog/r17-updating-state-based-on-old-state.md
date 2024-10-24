---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime:
title: "[React] 17. Must Do: Updating State Based on Old State"
featured: false
draft: false
tags:
  - React
description: "The importance of updating state based on the previous state to ensure correct behavior in React."
---

This section explains why it's crucial to update state based on the previous state in React, ensuring your components behave correctly, especially when updates happen rapidly.

## 目录

## Updating State Based on Old State

### 1. Good Approach: Using a Function to Update State

When updating a state that depends on the previous state, it's best to use a function that receives the current state as an argument. This ensures that React always uses the most recent state, avoiding potential issues with outdated values.

```jsx
const [isEditing, setIsEditing] = useState(false);

function handleClickEdit() {
  setIsEditing(state => !state); // This approach ensures you are working with the latest state.
}
```

### 2. Bad Approach: Directly Using the Current State

Directly using the current state (`isEditing`) inside `setIsEditing` can cause issues, especially when multiple state updates happen in quick succession. This may result in outdated state being used.

```jsx
const [isEditing, setIsEditing] = useState(false);

function handleClickEdit() {
  setIsEditing(!isEditing); // Not ideal: This might use an outdated state value.
}
```

### 3. Why the Function Approach is Better

React schedules state updates to happen in the future. If you directly reference the current state, like `!isEditing`, it might use an outdated state value because React hasn't processed the update yet. Let's say `isEditing` is false at the beginning.

**Example:**

```jsx
setIsEditing(!isEditing); // Based on the current state, it schedules setting to true.
setIsEditing(!isEditing); // Since the state hasn't changed yet, it still schedules setting to true again.
```

In contrast:

```jsx
setIsEditing(state => !state); // It correctly toggles the state, regardless of the current state.
setIsEditing(state => !state); // The same approach ensures both updates are processed correctly.
```

### 4. Another Example with Game Turns

Here’s another example involving a game. In the bad approach, we are using an outside variable (`activePlayer`), which might not reflect the most up-to-date state:

**Bad Approach:**

```jsx
let activePlayer = "X";
if (gameTurns.length > 0 && gameTurns[0].player === "X") {
  activePlayer = "O";
}

function handleSelectSquare(rowIndex, colIndex) {
  setGameTurns(prevTurns => {
    const updatedTurns = [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer }, // Bad: Using an outside variable.
      ...prevTurns,
    ];
    return updatedTurns;
  });
}
```

**Good Approach:**

In this improved version, we derive the `currentPlayer` from the previous state (`prevTurns`), ensuring it's always accurate:

```jsx
function handleSelectSquare(rowIndex, colIndex) {
  setGameTurns(prevTurns => {
    // Derive the current player based on the previous state
    let currentPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      currentPlayer = "O";
    }

    const updatedTurns = [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, // Good: Using the derived currentPlayer.
      ...prevTurns,
    ];
    return updatedTurns;
  });
}
```

### 5. Conclusion

When updating state based on the previous state, always use the functional approach. This ensures your React app behaves as expected, even with asynchronous state updates and rapid changes.
